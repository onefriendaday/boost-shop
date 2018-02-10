var isLocalhostCheck = window.location.href.indexOf('local-host') !== -1 || window.location.href.indexOf('0.0.0.0') !== -1;
    var Helper = {

        _isNumber: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        getAllParameters: function (url) {
            var _this = this;
            if (!url) {
                url = window.location.href;
            }
            var params = url.split('?');
            if (params.length !== 2) {
                return {};
            }
            var options = params[1].split('&');
            if (Object.prototype.toString.call(options) !== '[object Array]') {
                return {};
            }
            var obj = {};
            options.forEach(function (param) {
                var keyValue = param.split('=');
                var value = keyValue[1];
                if (value === 'true') {
                    value = true;
                }
                if (value === 'false') {
                    value = false;
                }
                if (_this._isNumber(value)) {
                    value = parseFloat(value);
                }
                obj[keyValue[0]] = value;
            });
            return obj;
        }
    };

    var onMouseEnter = function () {
        document.body.style = 'position: fixed; overflow-y:scroll';
    };

    var onMouseLeave = function () {
        document.body.style = 'postion: relative: overflow-y: auto';
    };

    window.RoomleConfigurator = (function (win, doc) {
        if (!Array.isArray) {
            Array.isArray = function (arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }
        var isAlpha = window.location.href.indexOf('www.alpha.roomle.com') !== -1;
        var server = isAlpha ? 'https://www.alpha.roomle.com/app/assets/hsc/' : (isLocalhostCheck) ? 'http://localhost:4747/' : 'https://www.roomle.com/app-beta/assets/hsc/';
        var urlPlaceholder = '@url@';
        var RoomleConfigurator = {
            _initDoneCallback: function () {
            },
            _isFullscreen: false,
            _successCallbacks: {},
            _errorCallbacks: {},
            _conversationId: 0,
            _thingToLoad: null,
            _iframeCode: '<iframe src="' + urlPlaceholder + '" style="width:100%;height:100%;border:none;"></iframe>',
            _roomleIframe: null,
            _listeners: [],
            _receiveFromRoomle: function (event) {
                if (event && event.data) {
                    var data = event.data;
                    if (typeof event.data === 'string') {
                        try {
                            data = JSON.parse(event.data);
                        } catch (e) {
                            data = null;
                        }
                    }

                    if (Array.isArray(data) && data[0].indexOf('MessageFromRoomle') !== -1) {
                        var fullCommand = data.shift(); // remove first item of array and return it. Array is edited in place
                        var command = fullCommand.split('.')[1];
                        return this._handleResponse(command, data);
                    }
                }
            },
            _handleResponse: function (command, data) {
                if (command === 'booted') {
                    return this._send(['dispatch.init', this._thingToLoad]);
                }
                if (command === 'initDone') {
                    return this._initDoneCallback();
                }
                if (command.indexOf('event::') === 0) {
                    var parts = command.split('::');
                    var eventname = parts[1];
                    return this._dispatch(eventname, data);
                }
                var conversationId = data.shift();
                if (command === 'resolve') {
                    var successCallback = this._successCallbacks[conversationId];
                    if (typeof successCallback === 'function') {
                        return successCallback.apply(successCallback, data);
                    }
                }

                if (command === 'toggleFullscreen') {
                    if (!this._isFullscreen) {
                        if (this._container.requestFullscreen) {
                            this._container.requestFullscreen()
                        } else if (this._container.webkitRequestFullscreen) {
                            this._container.webkitRequestFullscreen()
                        }
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        }
                    }
                }

                if (command === 'reject') {
                    var errorCallback = this._errorCallbacks[conversationId];
                    if (typeof errorCallback === 'function') {
                        return errorCallback.apply(errorCallback, data);
                    }
                }

            },

            _dispatch: function (eventname, data) {
                var listeners = this._listeners[eventname];
                if (!listeners && !listeners.length) {
                    return;
                }
                for (var i = 0, length = listeners.length; i < length; i++) {
                    var listener = listeners[i];
                    listener.apply(listener, data);
                }
            },

            _send: function (command, successCallback, errorCallback) {
                this._conversationId++;
                this._successCallbacks[this._conversationId] = successCallback;
                this._errorCallbacks[this._conversationId] = errorCallback;
                var fullCommand = [this._conversationId];
                [].push.apply(fullCommand, command);
                this._roomleIframe.postMessage(JSON.stringify(fullCommand), '*');
            },

            _parseThingToLoad: function (thingToLoad) {
                var method = 'loadConfigurationById';
                var preloadHint = thingToLoad;
                if (thingToLoad.isItem) {
                    method = 'loadConfigurableItemById';
                    preloadHint = thingToLoad.id;
                } else if (typeof thingToLoad === 'string' && thingToLoad[0] === '{') {
                    method = 'loadConfiguration';
                }
                return {method: method, id: preloadHint, preloadId: {catalogId: preloadHint.split(':')[0]}};
            },

            _fullscreenChange: function () {
                var isFullscreen = false;
                if (document.fullscreen ||
                        document.fullscreenElement ||
                        document.webkitFullscreenElement ||
                        document.mozFullScreenElement ||
                        document.msFullscreenElement) {
                    isFullscreen = true;
                }
                this._isFullscreen = isFullscreen;
                this._send(['dispatch.fullscreenChange', isFullscreen]);
            },

            _buildIframeCode: function (options) {
                var url = server;
                var seperator = server.indexOf('?') === -1 ? '?' : '&';
                for (var key in options) {
                    if (options.hasOwnProperty(key)) {
                        url += seperator + key + '=' + options[key];
                        seperator = '&';
                    }
                }
                return this._iframeCode.replace(urlPlaceholder, url);
            },

            init: function (configuratorId, htmlId, thingToLoad, options, initDoneCallback) {
                var container = doc.getElementById(htmlId);
                container.innerHTML = this._buildIframeCode(options);
                this._container = container;
                var iframe = container.firstElementChild;
                // iframe.addEventListener('mouseenter', onMouseEnter);
                // iframe.addEventListener('mouseleave', onMouseLeave);

                var fullscreenError = this._fullscreenChange.bind(this);
                ['fullscreenerror', 'webkitfullscreenerror', 'mozfullscreenerror', 'MSFullscreenError'].forEach(function (event) {
                    document.addEventListener(event, fullscreenError);
                });

                var fullscreenSuccess = this._fullscreenChange.bind(this);
                ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(function (event) {
                    document.addEventListener(event, fullscreenSuccess);
                });

                this._thingToLoad = this._parseThingToLoad(thingToLoad);
                if (typeof initDoneCallback === 'function') {
                    this._initDoneCallback = initDoneCallback;
                }
                if (!iframe && !iframe.contentWindow) {
                    console.error('Problem finding roomle iframe');
                } else {
                    this._roomleIframe = iframe.contentWindow;
                    win.addEventListener('message', this._receiveFromRoomle.bind(this), false);
                }
            },

            loadConfigurationId: function (id, options, successCallback, errorCallback) {
                if (typeof options === 'function') {
                    successCallback = options;
                    errorCallback = successCallback;
                }
                this._send(['loadConfigurationById', id, options], successCallback, errorCallback);
            },

            loadConfiguration: function (id, options, successCallback, errorCallback) {
                if (typeof options === 'function') {
                    successCallback = options;
                    errorCallback = successCallback;
                }

                this._send(['loadConfiguration', id, options], successCallback, errorCallback);
            },

            loadConfigurableItemId: function (id, options, successCallback, errorCallback) {
                if (typeof options === 'function') {
                    successCallback = options;
                    errorCallback = successCallback;
                }

                this._send(['loadConfigurableItemById', id, options], successCallback, errorCallback);
            },

            addChangeListener: function (func) {
                var eventname = 'onPartListUpdate';
                if (!this._listeners[eventname]) {
                    this._listeners[eventname] = [];
                }
                this._listeners[eventname].push(func);
            },

            generateImagesOfCurrentConfiguration: function (successCallback, errorCallback) {
                this._send(['proxy.generateImagesOfCurrentConfiguration'], successCallback, errorCallback);
            },

            saveCurrentConfiguration: function(successCallback, errorCallback) {
                this._send(['proxy.saveCurrentConfiguration'], successCallback, errorCallback);
            },

            getCurrentConfigurationId: function(successCallback, errorCallback) {
                this._send(['proxy.getCurrentConfigurationId'], successCallback, errorCallback);
            },

            removeChangeListener: function (func) {
                var eventname = 'onPartListUpdate';
                var listeners = this._listeners[eventname];

                if (typeof listeners === 'undefined') {
                    return;
                }

                var length = listeners.length;
                for (var i = 0; i < length; i++) {
                    if (listeners[i] === func) {
                        return listeners.splice(i, 1);
                    }
                }
            }

        };

        return RoomleConfigurator;

    }(window, document));
