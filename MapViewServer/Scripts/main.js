var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SourceUtils;
(function (SourceUtils) {
    var Api;
    (function (Api) {
        var LeafFlags;
        (function (LeafFlags) {
            LeafFlags[LeafFlags["Sky"] = 1] = "Sky";
            LeafFlags[LeafFlags["Radial"] = 2] = "Radial";
            LeafFlags[LeafFlags["Sky2D"] = 4] = "Sky2D";
        })(LeafFlags = Api.LeafFlags || (Api.LeafFlags = {}));
        var PrimitiveType;
        (function (PrimitiveType) {
            PrimitiveType[PrimitiveType["TriangleList"] = 0] = "TriangleList";
            PrimitiveType[PrimitiveType["TriangleStrip"] = 1] = "TriangleStrip";
            PrimitiveType[PrimitiveType["TriangleFan"] = 2] = "TriangleFan";
        })(PrimitiveType = Api.PrimitiveType || (Api.PrimitiveType = {}));
        var MeshComponent;
        (function (MeshComponent) {
            MeshComponent[MeshComponent["position"] = 1] = "position";
            MeshComponent[MeshComponent["normal"] = 2] = "normal";
            MeshComponent[MeshComponent["uv"] = 4] = "uv";
            MeshComponent[MeshComponent["uv2"] = 8] = "uv2";
            MeshComponent[MeshComponent["alpha"] = 16] = "alpha";
        })(MeshComponent = Api.MeshComponent || (Api.MeshComponent = {}));
        var MaterialPropertyType;
        (function (MaterialPropertyType) {
            MaterialPropertyType[MaterialPropertyType["boolean"] = 0] = "boolean";
            MaterialPropertyType[MaterialPropertyType["number"] = 1] = "number";
            MaterialPropertyType[MaterialPropertyType["texture2D"] = 2] = "texture2D";
            MaterialPropertyType[MaterialPropertyType["textureCube"] = 3] = "textureCube";
        })(MaterialPropertyType = Api.MaterialPropertyType || (Api.MaterialPropertyType = {}));
        var VtfFlags;
        (function (VtfFlags) {
            VtfFlags[VtfFlags["POINTSAMPLE"] = 1] = "POINTSAMPLE";
            VtfFlags[VtfFlags["TRILINEAR"] = 2] = "TRILINEAR";
            VtfFlags[VtfFlags["CLAMPS"] = 4] = "CLAMPS";
            VtfFlags[VtfFlags["CLAMPT"] = 8] = "CLAMPT";
            VtfFlags[VtfFlags["ANISOTROPIC"] = 16] = "ANISOTROPIC";
            VtfFlags[VtfFlags["HINT_DXT5"] = 32] = "HINT_DXT5";
            VtfFlags[VtfFlags["PWL_CORRECTED"] = 64] = "PWL_CORRECTED";
            VtfFlags[VtfFlags["NORMAL"] = 128] = "NORMAL";
            VtfFlags[VtfFlags["NOMIP"] = 256] = "NOMIP";
            VtfFlags[VtfFlags["NOLOD"] = 512] = "NOLOD";
            VtfFlags[VtfFlags["ALL_MIPS"] = 1024] = "ALL_MIPS";
            VtfFlags[VtfFlags["PROCEDURAL"] = 2048] = "PROCEDURAL";
            VtfFlags[VtfFlags["ONEBITALPHA"] = 4096] = "ONEBITALPHA";
            VtfFlags[VtfFlags["EIGHTBITALPHA"] = 8192] = "EIGHTBITALPHA";
            VtfFlags[VtfFlags["ENVMAP"] = 16384] = "ENVMAP";
            VtfFlags[VtfFlags["RENDERTARGET"] = 32768] = "RENDERTARGET";
            VtfFlags[VtfFlags["DEPTHRENDERTARGET"] = 65536] = "DEPTHRENDERTARGET";
            VtfFlags[VtfFlags["NODEBUGOVERRIDE"] = 131072] = "NODEBUGOVERRIDE";
            VtfFlags[VtfFlags["SINGLECOPY"] = 262144] = "SINGLECOPY";
            VtfFlags[VtfFlags["PRE_SRGB"] = 524288] = "PRE_SRGB";
            VtfFlags[VtfFlags["UNUSED_00100000"] = 1048576] = "UNUSED_00100000";
            VtfFlags[VtfFlags["UNUSED_00200000"] = 2097152] = "UNUSED_00200000";
            VtfFlags[VtfFlags["UNUSED_00400000"] = 4194304] = "UNUSED_00400000";
            VtfFlags[VtfFlags["NODEPTHBUFFER"] = 8388608] = "NODEPTHBUFFER";
            VtfFlags[VtfFlags["UNUSED_01000000"] = 16777216] = "UNUSED_01000000";
            VtfFlags[VtfFlags["CLAMPU"] = 33554432] = "CLAMPU";
            VtfFlags[VtfFlags["VERTEXTEXTURE"] = 67108864] = "VERTEXTEXTURE";
            VtfFlags[VtfFlags["SSBUMP"] = 134217728] = "SSBUMP";
            VtfFlags[VtfFlags["UNUSED_10000000"] = 268435456] = "UNUSED_10000000";
            VtfFlags[VtfFlags["BORDER"] = 536870912] = "BORDER";
            VtfFlags[VtfFlags["UNUSED_40000000"] = 1073741824] = "UNUSED_40000000";
            VtfFlags[VtfFlags["UNUSED_80000000"] = 2147483648] = "UNUSED_80000000";
        })(VtfFlags = Api.VtfFlags || (Api.VtfFlags = {}));
    })(Api = SourceUtils.Api || (SourceUtils.Api = {}));
})(SourceUtils || (SourceUtils = {}));
/// <reference path="typings/lz-string/lz-string.d.ts"/>
var SourceUtils;
(function (SourceUtils) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.decompressFloat32Array = function (value) {
            return new Float32Array(Utils.decompress(value));
        };
        Utils.decompressUint16Array = function (value) {
            return new Uint16Array(Utils.decompress(value));
        };
        Utils.decompressUint32Array = function (value) {
            return new Uint32Array(Utils.decompress(value));
        };
        Utils.decompress = function (value) {
            return typeof value === "string"
                ? JSON.parse(LZString.decompressFromBase64(value))
                : value;
        };
        return Utils;
    }());
    SourceUtils.Utils = Utils;
})(SourceUtils || (SourceUtils = {}));
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/threejs/three.d.ts" />
/// <reference path="Utils.ts"/>
var SourceUtils;
(function (SourceUtils) {
    var MouseButton;
    (function (MouseButton) {
        MouseButton[MouseButton["Left"] = 1] = "Left";
        MouseButton[MouseButton["Middle"] = 2] = "Middle";
        MouseButton[MouseButton["Right"] = 3] = "Right";
    })(MouseButton = SourceUtils.MouseButton || (SourceUtils.MouseButton = {}));
    var Key;
    (function (Key) {
        Key[Key["Backspace"] = 8] = "Backspace";
        Key[Key["Tab"] = 9] = "Tab";
        Key[Key["Enter"] = 13] = "Enter";
        Key[Key["Shift"] = 16] = "Shift";
        Key[Key["Ctrl"] = 17] = "Ctrl";
        Key[Key["Alt"] = 18] = "Alt";
        Key[Key["PauseBreak"] = 19] = "PauseBreak";
        Key[Key["CapsLock"] = 20] = "CapsLock";
        Key[Key["Escape"] = 27] = "Escape";
        Key[Key["PageUp"] = 33] = "PageUp";
        Key[Key["PageDown"] = 34] = "PageDown";
        Key[Key["End"] = 35] = "End";
        Key[Key["Home"] = 36] = "Home";
        Key[Key["LeftArrow"] = 37] = "LeftArrow";
        Key[Key["UpArrow"] = 38] = "UpArrow";
        Key[Key["RightArrow"] = 39] = "RightArrow";
        Key[Key["DownArrow"] = 40] = "DownArrow";
        Key[Key["Insert"] = 45] = "Insert";
        Key[Key["Delete"] = 46] = "Delete";
        Key[Key["D0"] = 48] = "D0";
        Key[Key["D1"] = 49] = "D1";
        Key[Key["D2"] = 50] = "D2";
        Key[Key["D3"] = 51] = "D3";
        Key[Key["D4"] = 52] = "D4";
        Key[Key["D5"] = 53] = "D5";
        Key[Key["D6"] = 54] = "D6";
        Key[Key["D7"] = 55] = "D7";
        Key[Key["D8"] = 56] = "D8";
        Key[Key["D9"] = 57] = "D9";
        Key[Key["A"] = 65] = "A";
        Key[Key["B"] = 66] = "B";
        Key[Key["C"] = 67] = "C";
        Key[Key["D"] = 68] = "D";
        Key[Key["E"] = 69] = "E";
        Key[Key["F"] = 70] = "F";
        Key[Key["G"] = 71] = "G";
        Key[Key["H"] = 72] = "H";
        Key[Key["I"] = 73] = "I";
        Key[Key["J"] = 74] = "J";
        Key[Key["K"] = 75] = "K";
        Key[Key["L"] = 76] = "L";
        Key[Key["M"] = 77] = "M";
        Key[Key["N"] = 78] = "N";
        Key[Key["O"] = 79] = "O";
        Key[Key["P"] = 80] = "P";
        Key[Key["Q"] = 81] = "Q";
        Key[Key["R"] = 82] = "R";
        Key[Key["S"] = 83] = "S";
        Key[Key["T"] = 84] = "T";
        Key[Key["U"] = 85] = "U";
        Key[Key["V"] = 86] = "V";
        Key[Key["W"] = 87] = "W";
        Key[Key["X"] = 88] = "X";
        Key[Key["Y"] = 89] = "Y";
        Key[Key["Z"] = 90] = "Z";
        Key[Key["LeftWindowKey"] = 91] = "LeftWindowKey";
        Key[Key["RightWindowKey"] = 92] = "RightWindowKey";
        Key[Key["Select"] = 93] = "Select";
        Key[Key["Numpad0"] = 96] = "Numpad0";
        Key[Key["Numpad1"] = 97] = "Numpad1";
        Key[Key["Numpad2"] = 98] = "Numpad2";
        Key[Key["Numpad3"] = 99] = "Numpad3";
        Key[Key["Numpad4"] = 100] = "Numpad4";
        Key[Key["Numpad5"] = 101] = "Numpad5";
        Key[Key["Numpad6"] = 102] = "Numpad6";
        Key[Key["Numpad7"] = 103] = "Numpad7";
        Key[Key["Numpad8"] = 104] = "Numpad8";
        Key[Key["Numpad9"] = 105] = "Numpad9";
        Key[Key["Multiply"] = 106] = "Multiply";
        Key[Key["Add"] = 107] = "Add";
        Key[Key["Subtract"] = 109] = "Subtract";
        Key[Key["DecimalPoint"] = 110] = "DecimalPoint";
        Key[Key["Divide"] = 111] = "Divide";
        Key[Key["F1"] = 112] = "F1";
        Key[Key["F2"] = 113] = "F2";
        Key[Key["F3"] = 114] = "F3";
        Key[Key["F4"] = 115] = "F4";
        Key[Key["F5"] = 116] = "F5";
        Key[Key["F6"] = 117] = "F6";
        Key[Key["F7"] = 118] = "F7";
        Key[Key["F8"] = 119] = "F8";
        Key[Key["F9"] = 120] = "F9";
        Key[Key["F10"] = 121] = "F10";
        Key[Key["F11"] = 122] = "F11";
        Key[Key["F12"] = 123] = "F12";
        Key[Key["NumLock"] = 144] = "NumLock";
        Key[Key["ScrollLock"] = 145] = "ScrollLock";
        Key[Key["SemiColon"] = 186] = "SemiColon";
        Key[Key["EqualSign"] = 187] = "EqualSign";
        Key[Key["Comma"] = 188] = "Comma";
        Key[Key["Dash"] = 189] = "Dash";
        Key[Key["Period"] = 190] = "Period";
        Key[Key["ForwardSlash"] = 191] = "ForwardSlash";
        Key[Key["GraveAccent"] = 192] = "GraveAccent";
        Key[Key["OpenBracket"] = 219] = "OpenBracket";
        Key[Key["BackSlash"] = 220] = "BackSlash";
        Key[Key["CloseBraket"] = 221] = "CloseBraket";
        Key[Key["SingleQuote"] = 222] = "SingleQuote";
    })(Key = SourceUtils.Key || (SourceUtils.Key = {}));
    var AppBase = (function () {
        function AppBase() {
            this.canLockPointer = false;
            this.previousTime = 0;
            this.mouseScreenPos = new THREE.Vector2();
            this.mouseLookDelta = new THREE.Vector2();
            this.dragStartScreenPos = new THREE.Vector2();
            this.heldKeys = new Array(128);
            this.heldMouseButtons = new Array(8);
        }
        AppBase.prototype.init = function (container) {
            var _this = this;
            this.container = container;
            this.canvas = $("<canvas/>")[0];
            this.context = this.canvas.getContext("webgl");
            this.onWindowResize();
            this.animateCallback = function (time) {
                var deltaTime = time - _this.previousTime;
                _this.previousTime = time;
                _this.animate(deltaTime * 0.001);
            };
            this.container.append(this.canvas);
            this.container.bind("mousewheel DOMMouseScroll", function (e) {
                if (e.type === "mousewheel") {
                    _this.onMouseScroll(e.originalEvent.wheelDelta / 400);
                }
                else if (e.type === "DOMMouseScroll") {
                    _this.onMouseScroll(e.originalEvent.detail / -10);
                }
            });
            this.container.mousedown(function (e) {
                _this.heldMouseButtons[e.which] = true;
                _this.onMouseDown(e.which, _this.getScreenPos(e.pageX, e.pageY, _this.mouseScreenPos));
                if (_this.canLockPointer)
                    _this.container[0].requestPointerLock();
                return false;
            });
            $(window).mouseup(function (e) {
                _this.heldMouseButtons[e.which] = false;
                _this.onMouseUp(e.which, _this.getScreenPos(e.pageX, e.pageY, _this.mouseScreenPos));
            });
            $(window).mousemove(function (e) {
                _this.onMouseMove(_this.getScreenPos(e.pageX, e.pageY, _this.mouseScreenPos));
                if (_this.isPointerLocked()) {
                    _this.mouseLookDelta.set(e.originalEvent.movementX, e.originalEvent.movementY);
                    _this.onMouseLook(_this.mouseLookDelta);
                }
            });
            $(window).keydown(function (e) {
                if (e.which < 0 || e.which >= 128)
                    return true;
                _this.heldKeys[e.which] = true;
                _this.onKeyDown(e.which);
                if (_this.isPointerLocked() && e.which === Key.Escape) {
                    document.exitPointerLock();
                }
                return e.which !== Key.Tab;
            });
            $(window).keyup(function (e) {
                if (e.which < 0 || e.which >= 128)
                    return true;
                _this.heldKeys[e.which] = false;
                _this.onKeyUp(e.which);
            });
            this.container.contextmenu(function () { return false; });
            window.addEventListener("resize", function () { return _this.onWindowResize(); }, false);
        };
        AppBase.prototype.isPointerLocked = function () {
            return document.pointerLockElement === this.container[0];
        };
        AppBase.prototype.toggleFullscreen = function () {
            var container = this.getContainer();
            if (document.fullscreenElement === container || document.webkitFullscreenElement === container) {
                if (document.exitFullscreen)
                    document.exitFullscreen();
                else if (document.webkitExitFullscreen)
                    document.webkitExitFullscreen();
            }
            else if (container.requestFullscreen) {
                container.requestFullscreen();
            }
            else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            }
        };
        AppBase.prototype.getContainer = function () {
            return this.container[0];
        };
        AppBase.prototype.getContext = function () {
            return this.context;
        };
        AppBase.prototype.getCanvas = function () {
            return this.canvas;
        };
        AppBase.prototype.getWidth = function () {
            return this.container.innerWidth();
        };
        AppBase.prototype.getHeight = function () {
            return this.container.innerHeight();
        };
        AppBase.prototype.getMouseScreenPos = function (out) {
            if (out == null)
                out = new THREE.Vector2();
            out.copy(this.mouseScreenPos);
            return out;
        };
        AppBase.prototype.getMouseViewPos = function (out) {
            if (out == null)
                out = new THREE.Vector2();
            this.getMouseScreenPos(out);
            out.x = out.x / this.getWidth() - 0.5;
            out.y = out.y / this.getHeight() - 0.5;
            return out;
        };
        AppBase.prototype.getScreenPos = function (pageX, pageY, out) {
            if (out == null)
                out = new THREE.Vector2();
            out.x = pageX - this.container.offset().left;
            out.y = pageY - this.container.offset().top;
            return out;
        };
        AppBase.prototype.onMouseScroll = function (delta) { };
        AppBase.prototype.onMouseDown = function (button, screenPos) {
            if (button === MouseButton.Left) {
                this.dragStartScreenPos = screenPos;
            }
        };
        AppBase.prototype.onMouseUp = function (button, screenPos) {
            if (button === MouseButton.Left && this.isDragging) {
                this.isDragging = false;
                this.onDragEnd();
            }
        };
        AppBase.prototype.onMouseMove = function (screenPos) {
            if (this.isMouseButtonDown(MouseButton.Left)) {
                if (!this.isDragging) {
                    this.isDragging = true;
                    this.onDragStart(this.dragStartScreenPos);
                }
                this.onDragUpdate(screenPos);
            }
        };
        AppBase.prototype.onMouseLook = function (delta) { };
        AppBase.prototype.onDragStart = function (screenPos) { };
        AppBase.prototype.onDragUpdate = function (screenPos) { };
        AppBase.prototype.onDragEnd = function () { };
        AppBase.prototype.onKeyDown = function (key) { };
        AppBase.prototype.onKeyUp = function (key) { };
        AppBase.prototype.isKeyDown = function (key) {
            return key >= 0 && key < 128 && this.heldKeys[key];
        };
        AppBase.prototype.isMouseButtonDown = function (button) {
            return button >= 0 && button < this.heldMouseButtons.length && this.heldMouseButtons[button];
        };
        AppBase.prototype.onWindowResize = function () {
            this.canvas.width = this.container.innerWidth();
            this.canvas.height = this.container.innerHeight();
            this.context.viewport(0, 0, this.canvas.width, this.canvas.height);
            this.onUpdateCamera();
        };
        AppBase.prototype.onUpdateCamera = function () { };
        AppBase.prototype.animate = function (dt) {
            dt = dt || 0;
            requestAnimationFrame(this.animateCallback);
            this.onUpdateFrame(dt);
            this.onRenderFrame(dt);
        };
        AppBase.prototype.onUpdateFrame = function (dt) { };
        AppBase.prototype.onRenderFrame = function (dt) { };
        return AppBase;
    }());
    SourceUtils.AppBase = AppBase;
})(SourceUtils || (SourceUtils = {}));
/// <reference path="AppBase.ts"/>
var SourceUtils;
(function (SourceUtils) {
    var Entity = (function () {
        function Entity() {
            this.position = new THREE.Vector3();
            this.rotation = new THREE.Quaternion(0, 0, 0, 1);
            this.scale = new THREE.Vector3(1, 1, 1);
            this.matrix = new THREE.Matrix4();
            this.matrixInvalid = true;
            this.inverseMatrix = new THREE.Matrix4();
            this.inverseMatrixInvalid = true;
            this.sortIndex = Entity.nextSortIndex++;
        }
        Entity.prototype.compareTo = function (other) {
            if (other == null)
                return 1;
            return this.sortIndex - other.sortIndex;
        };
        Entity.prototype.invalidateMatrices = function () {
            this.matrixInvalid = true;
            this.inverseMatrixInvalid = true;
        };
        Entity.prototype.getMatrix = function (target) {
            if (this.matrixInvalid) {
                this.matrixInvalid = false;
                this.matrix.compose(this.position, this.rotation, this.scale);
            }
            if (target != null)
                target.copy(this.matrix);
        };
        Entity.prototype.getInverseMatrix = function (target) {
            if (this.inverseMatrixInvalid) {
                this.inverseMatrixInvalid = false;
                this.getMatrix();
                this.inverseMatrix.getInverse(this.matrix);
            }
            if (target != null)
                target.copy(this.inverseMatrix);
        };
        Entity.prototype.setPosition = function (valueOrX, y, z) {
            if (y !== undefined) {
                var x = valueOrX;
                this.position.set(x, y, z);
            }
            else {
                var value = valueOrX;
                this.position.set(value.x, value.y, value.z);
            }
            this.invalidateMatrices();
        };
        Entity.prototype.getPosition = function (target) {
            target.copy(this.position);
        };
        Entity.prototype.translate = function (valueOrX, y, z) {
            if (typeof valueOrX === "number") {
                this.position.x += valueOrX;
                this.position.y += y;
                this.position.z += z;
            }
            else {
                this.position.add(valueOrX);
            }
            this.invalidateMatrices();
        };
        Entity.prototype.setRotation = function (value) {
            this.rotation.copy(value);
            this.invalidateMatrices();
        };
        Entity.prototype.copyRotation = function (other) {
            this.setRotation(other.rotation);
        };
        Entity.prototype.applyRotationTo = function (vector) {
            vector.applyQuaternion(this.rotation);
        };
        Entity.prototype.setScale = function (value) {
            if (typeof value === "number") {
                this.scale.set(value, value, value);
            }
            else {
                this.scale.set(value.x, value.y, value.z);
            }
            this.invalidateMatrices();
        };
        return Entity;
    }());
    Entity.nextSortIndex = 0;
    SourceUtils.Entity = Entity;
})(SourceUtils || (SourceUtils = {}));
/// <reference path="Entity.ts"/>
var SourceUtils;
(function (SourceUtils) {
    var BspModel = (function (_super) {
        __extends(BspModel, _super);
        function BspModel(map, info) {
            var _this = _super.call(this) || this;
            _this.map = map;
            _this.index = info.model;
            _this.clusters = info.clusters;
            _this.setPosition(info.origin);
            _this.loadInfo(_this.map.info.modelUrl.replace("{index}", _this.index.toString()));
            return _this;
        }
        BspModel.prototype.loadInfo = function (url) {
            var _this = this;
            $.getJSON(url, function (data) {
                _this.info = data;
                _this.loadTree();
                _this.map.onModelLoaded(_this);
            });
        };
        BspModel.prototype.loadTree = function () {
            this.leaves = [];
            this.root = new SourceUtils.VisNode(this, SourceUtils.Utils.decompress(this.info.tree));
            this.root.getAllLeaves(this.leaves);
        };
        BspModel.prototype.getLeaves = function () {
            return this.leaves;
        };
        BspModel.prototype.findLeaf = function (pos) {
            if (this.root == null)
                return null;
            var elem = this.root;
            while (!elem.isLeaf) {
                var node = elem;
                var index = node.plane.normal.dot(pos) >= node.plane.constant ? 0 : 1;
                elem = node.children[index];
            }
            return elem.isLeaf ? elem : null;
        };
        return BspModel;
    }(SourceUtils.Entity));
    SourceUtils.BspModel = BspModel;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var Camera = (function (_super) {
        __extends(Camera, _super);
        function Camera() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.projectionInvalid = true;
            _this.projectionMatrix = new THREE.Matrix4();
            return _this;
        }
        Camera.prototype.getProjectionMatrix = function (target) {
            if (this.projectionInvalid) {
                this.projectionInvalid = false;
                this.onUpdateProjectionMatrix(this.projectionMatrix);
            }
            target.copy(this.projectionMatrix);
        };
        Camera.prototype.invalidateProjectionMatrix = function () {
            this.projectionInvalid = true;
        };
        Camera.prototype.onUpdateProjectionMatrix = function (matrix) {
            throw "Method 'onUpdateProjectionMatrix' not implemented.";
        };
        return Camera;
    }(SourceUtils.Entity));
    SourceUtils.Camera = Camera;
    var PerspectiveCamera = (function (_super) {
        __extends(PerspectiveCamera, _super);
        function PerspectiveCamera(fov, aspect, near, far) {
            var _this = _super.call(this) || this;
            _this.fov = fov;
            _this.aspect = aspect;
            _this.near = near;
            _this.far = far;
            return _this;
        }
        PerspectiveCamera.prototype.setFov = function (value) { this.fov = value; this.invalidateProjectionMatrix(); };
        PerspectiveCamera.prototype.getFov = function () { return this.fov; };
        PerspectiveCamera.prototype.setAspect = function (value) { this.aspect = value; this.invalidateProjectionMatrix(); };
        PerspectiveCamera.prototype.getAspect = function () { return this.aspect; };
        PerspectiveCamera.prototype.setNear = function (value) { this.near = value; this.invalidateProjectionMatrix(); };
        PerspectiveCamera.prototype.getNear = function () { return this.near; };
        PerspectiveCamera.prototype.setFar = function (value) { this.far = value; this.invalidateProjectionMatrix(); };
        PerspectiveCamera.prototype.getFar = function () { return this.far; };
        PerspectiveCamera.prototype.onUpdateProjectionMatrix = function (matrix) {
            var near = this.near, top = near * Math.tan(THREE.Math.DEG2RAD * 0.5 * this.fov), height = 2 * top, width = this.aspect * height, left = -0.5 * width;
            matrix.makePerspective(left, left + width, top, top - height, near, this.far);
        };
        return PerspectiveCamera;
    }(Camera));
    SourceUtils.PerspectiveCamera = PerspectiveCamera;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var DrawListItem = (function () {
        function DrawListItem() {
            this.drawLists = [];
        }
        DrawListItem.prototype.addMeshHandles = function (handles) {
            if (this.meshHandles == null)
                this.meshHandles = [];
            for (var i = 0, iEnd = handles.length; i < iEnd; ++i) {
                this.meshHandles.push(handles[i].clone(this.parent));
            }
            if (this.getIsVisible()) {
                for (var i = 0, iEnd = this.drawLists.length; i < iEnd; ++i) {
                    this.drawLists[i].updateItem(this);
                }
            }
        };
        DrawListItem.prototype.getIsVisible = function () {
            return this.drawLists.length > 0;
        };
        DrawListItem.prototype.getIsInDrawList = function (drawList) {
            for (var i = 0, iEnd = this.drawLists.length; i < iEnd; ++i) {
                if (this.drawLists[i] === drawList) {
                    return true;
                }
            }
            return false;
        };
        DrawListItem.prototype.onAddToDrawList = function (list) {
            if (this.getIsInDrawList(list))
                throw "Item added to a draw list twice.";
            this.drawLists.push(list);
        };
        DrawListItem.prototype.onRemoveFromDrawList = function (list) {
            for (var i = 0, iEnd = this.drawLists.length; i < iEnd; ++i) {
                if (this.drawLists[i] === list) {
                    this.drawLists.splice(i, 1);
                    return;
                }
            }
            throw "Item removed from a draw list it isn't a member of.";
        };
        DrawListItem.prototype.onRequestMeshHandles = function () { };
        DrawListItem.prototype.getMeshHandles = function () {
            if (this.meshHandles == null) {
                this.onRequestMeshHandles();
            }
            return this.meshHandles;
        };
        return DrawListItem;
    }());
    DrawListItem.rootCenter = new THREE.Vector3();
    DrawListItem.thisCenter = new THREE.Vector3();
    SourceUtils.DrawListItem = DrawListItem;
    var BspDrawListItem = (function (_super) {
        __extends(BspDrawListItem, _super);
        function BspDrawListItem(map, tokenPrefix, tokenIndex) {
            var _this = _super.call(this) || this;
            _this.loadingFaces = false;
            _this.map = map;
            _this.tokenPrefix = tokenPrefix;
            _this.tokenIndex = tokenIndex;
            return _this;
        }
        BspDrawListItem.prototype.onRequestMeshHandles = function () {
            if (this.loadingFaces)
                return;
            this.loadingFaces = true;
            this.map.faceLoader.loadFaces(this);
        };
        BspDrawListItem.prototype.faceLoadPriority = function (map) {
            if (!this.getIsVisible())
                return Number.POSITIVE_INFINITY;
            if (this.bounds == null)
                return Number.MAX_VALUE;
            return 0;
        };
        BspDrawListItem.prototype.onLoadFaces = function (handles) {
            this.addMeshHandles(handles);
        };
        BspDrawListItem.prototype.getApiQueryToken = function () { return "" + this.tokenPrefix + this.tokenIndex; };
        return BspDrawListItem;
    }(DrawListItem));
    SourceUtils.BspDrawListItem = BspDrawListItem;
    var StudioModelDrawListItem = (function (_super) {
        __extends(StudioModelDrawListItem, _super);
        function StudioModelDrawListItem(map, url) {
            var _this = _super.call(this) || this;
            _this.map = map;
            _this.mdlUrl = url;
            return _this;
        }
        StudioModelDrawListItem.prototype.onRequestMeshHandles = function () {
            var _this = this;
            if (this.mdl != null)
                return;
            this.mdl = this.map.modelLoader.load(this.mdlUrl);
            this.mdl.addMeshLoadCallback(function (model) { return _this.onMeshLoad(model); });
        };
        StudioModelDrawListItem.prototype.onMeshLoad = function (model) {
            this.addMeshHandles(model.getMeshHandles());
        };
        return StudioModelDrawListItem;
    }(DrawListItem));
    SourceUtils.StudioModelDrawListItem = StudioModelDrawListItem;
})(SourceUtils || (SourceUtils = {}));
/// <reference path="DrawListItem.ts"/>
var SourceUtils;
(function (SourceUtils) {
    var Displacement = (function (_super) {
        __extends(Displacement, _super);
        function Displacement(model, info) {
            var _this = _super.call(this, model.map, "d", info.index) || this;
            _this.parent = model;
            _this.clusters = info.clusters;
            var min = info.min;
            var max = info.max;
            _this.bounds = new THREE.Box3(new THREE.Vector3(min.x, min.y, min.z), new THREE.Vector3(max.x, max.y, max.z));
            return _this;
        }
        return Displacement;
    }(SourceUtils.BspDrawListItem));
    SourceUtils.Displacement = Displacement;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var RenderContext = (function () {
        function RenderContext(map, camera) {
            this.projectionMatrix = new THREE.Matrix4();
            this.modelMatrix = new THREE.Matrix4();
            this.viewMatrix = new THREE.Matrix4();
            this.modelViewMatrix = new THREE.Matrix4();
            this.modelViewInvalid = true;
            this.origin = new THREE.Vector3();
            this.map = map;
            this.camera = camera;
            this.drawList = new DrawList(map);
        }
        RenderContext.prototype.getProjectionMatrix = function () {
            return this.projectionMatrix.elements;
        };
        RenderContext.prototype.getModelViewMatrix = function () {
            if (this.modelViewInvalid) {
                this.modelViewInvalid = false;
                this.modelViewMatrix.multiplyMatrices(this.viewMatrix, this.modelMatrix);
            }
            return this.modelViewMatrix.elements;
        };
        RenderContext.prototype.setModelTransform = function (model) {
            if (model == null) {
                this.modelMatrix.identity();
            }
            else {
                model.getMatrix(this.modelMatrix);
            }
            this.modelViewInvalid = true;
        };
        RenderContext.prototype.render = function () {
            this.camera.getPosition(this.origin);
            var persp = this.camera;
            if (persp.getNear !== undefined) {
                this.near = persp.getNear();
                this.far = persp.getFar();
            }
            this.camera.getProjectionMatrix(this.projectionMatrix);
            this.camera.getInverseMatrix(this.viewMatrix);
            this.modelViewInvalid = true;
            this.map.shaderManager.setCurrentProgram(null);
            this.updatePvs();
            this.drawList.render(this);
        };
        RenderContext.prototype.canSeeSky2D = function () {
            return this.pvsRoot == null || this.pvsRoot.cluster === -1 || this.pvsRoot.canSeeSky2D;
        };
        RenderContext.prototype.canSeeSky3D = function () {
            return this.pvsRoot == null || this.pvsRoot.cluster === -1 || this.pvsRoot.canSeeSky3D;
        };
        RenderContext.prototype.replacePvs = function (pvs) {
            this.drawList.clear();
            if (pvs != null)
                this.map.appendToDrawList(this.drawList, pvs);
        };
        RenderContext.prototype.updatePvs = function (force) {
            var _this = this;
            var worldSpawn = this.map.getWorldSpawn();
            if (worldSpawn == null)
                return;
            var root = worldSpawn.findLeaf(this.origin);
            if (root === this.pvsRoot && !force)
                return;
            this.pvsRoot = root;
            if (root == null || root.cluster === -1) {
                this.replacePvs(null);
                return;
            }
            this.map.getPvsArray(root, function (pvs) {
                if (_this.pvsRoot != null && _this.pvsRoot === root) {
                    _this.replacePvs(pvs);
                }
            });
        };
        RenderContext.prototype.getDrawCallCount = function () {
            return this.drawList.getDrawCalls();
        };
        return RenderContext;
    }());
    SourceUtils.RenderContext = RenderContext;
    var DrawList = (function () {
        function DrawList(map) {
            this.items = [];
            this.handles = [];
            this.merged = [];
            this.map = map;
        }
        DrawList.prototype.clear = function () {
            for (var i = 0, iEnd = this.items.length; i < iEnd; ++i) {
                this.items[i].onRemoveFromDrawList(this);
            }
            this.items = [];
            this.handles = [];
            this.merged = [];
        };
        DrawList.prototype.getDrawCalls = function () {
            return this.merged == null ? 0 : this.merged.length;
        };
        DrawList.prototype.addItem = function (item) {
            this.items.push(item);
            this.updateItem(item);
            item.onAddToDrawList(this);
        };
        DrawList.prototype.updateItem = function (item) {
            this.handles = null;
        };
        DrawList.prototype.renderHandle = function (handle, context) {
            var changedMaterial = false;
            var changedProgram = false;
            var changedTransform = false;
            if (this.lastParent !== handle.parent) {
                this.lastParent = handle.parent;
                context.setModelTransform(this.lastParent);
                changedTransform = true;
            }
            if (handle.materialIndex !== undefined && this.lastMaterialIndex !== handle.materialIndex) {
                changedMaterial = true;
                this.lastMaterialIndex = handle.materialIndex;
                this.lastMaterial = this.map.getMaterial(handle.materialIndex);
            }
            else if (handle.materialIndex === undefined && this.lastMaterial !== handle.material) {
                changedMaterial = true;
                this.lastMaterialIndex = undefined;
                this.lastMaterial = handle.material;
            }
            if (changedMaterial) {
                if (this.lastMaterial == null) {
                    this.canRender = false;
                    return;
                }
                if (this.lastProgram !== this.lastMaterial.getProgram()) {
                    if (this.lastProgram != null)
                        this.lastProgram.cleanupPostRender(this.map, context);
                    this.lastProgram = this.lastMaterial.getProgram();
                    this.lastProgram.prepareForRendering(this.map, context);
                    changedProgram = true;
                    changedTransform = true;
                }
                this.canRender = this.lastProgram.isCompiled() && this.lastMaterial.prepareForRendering();
            }
            if (!this.canRender)
                return;
            if (changedTransform) {
                this.lastProgram.changeModelTransform(context);
            }
            if (this.lastGroup !== handle.group || changedProgram) {
                this.lastGroup = handle.group;
                this.lastGroup.prepareForRendering(this.lastProgram);
            }
            this.lastGroup.renderElements(handle.drawMode, handle.offset, handle.count);
        };
        DrawList.compareHandles = function (a, b) {
            return a.compareTo(b);
        };
        DrawList.prototype.buildHandleList = function () {
            this.handles = [];
            for (var i = 0, iEnd = this.items.length; i < iEnd; ++i) {
                var handles = this.items[i].getMeshHandles();
                if (handles == null)
                    continue;
                for (var j = 0, jEnd = handles.length; j < jEnd; ++j) {
                    var handle = handles[j];
                    if (handle.count === 0)
                        continue;
                    if (handle.material == null) {
                        if ((handle.material = this.map.getMaterial(handle.materialIndex)) == null)
                            continue;
                    }
                    this.handles.push(handle);
                }
            }
            this.handles.sort(DrawList.compareHandles);
            this.merged = [];
            var last = null;
            for (var i = 0, iEnd = this.handles.length; i < iEnd; ++i) {
                var next = this.handles[i];
                if (last != null && last.canMerge(next)) {
                    last.merge(next);
                    continue;
                }
                last = new SourceUtils.WorldMeshHandle();
                this.merged.push(last);
                last.parent = next.parent;
                last.group = next.group;
                last.drawMode = next.drawMode;
                last.material = next.material;
                last.materialIndex = next.materialIndex;
                last.offset = next.offset;
                last.count = next.count;
            }
            this.map.getApp().invalidateDebugPanel();
        };
        DrawList.prototype.render = function (context) {
            this.lastParent = undefined;
            this.lastGroup = undefined;
            this.lastProgram = undefined;
            this.lastMaterial = undefined;
            this.lastMaterialIndex = undefined;
            this.lastIndex = undefined;
            if (this.handles == null)
                this.buildHandleList();
            for (var i = 0, iEnd = this.merged.length; i < iEnd; ++i) {
                this.renderHandle(this.merged[i], context);
            }
            if (this.lastProgram != null)
                this.lastProgram.cleanupPostRender(this.map, context);
        };
        return DrawList;
    }());
    SourceUtils.DrawList = DrawList;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var MeshData = (function () {
        function MeshData(facesOrVertData, indexData) {
            var vertData = facesOrVertData;
            if (indexData == null) {
                indexData = facesOrVertData;
            }
            this.components = vertData.components;
            this.elements = indexData.elements;
            this.vertices = SourceUtils.Utils.decompressFloat32Array(vertData.vertices);
            this.indices = SourceUtils.Utils.decompressUint16Array(indexData.indices);
        }
        return MeshData;
    }());
    SourceUtils.MeshData = MeshData;
    var FaceLoader = (function () {
        function FaceLoader(map) {
            this.queue = [];
            this.active = [];
            this.maxConcurrentRequests = 4;
            this.maxLeavesPerRequest = 512;
            this.map = map;
        }
        FaceLoader.prototype.loadFaces = function (target) {
            this.queue.push(target);
            this.update();
        };
        FaceLoader.prototype.getNextTask = function () {
            var bestScore = Number.POSITIVE_INFINITY;
            var bestIndex = -1;
            for (var i = 0; i < this.queue.length; ++i) {
                var task = this.queue[i];
                var score = task.faceLoadPriority(this.map);
                if (bestIndex > -1 && score >= bestScore)
                    continue;
                bestScore = score;
                bestIndex = i;
            }
            if (bestIndex === -1)
                return null;
            var result = this.queue[bestIndex];
            this.queue.splice(bestIndex, 1);
            return result;
        };
        FaceLoader.prototype.update = function () {
            var _this = this;
            if (this.queue.length <= 0 || this.active.length >= this.maxConcurrentRequests)
                return;
            var query = "";
            var tasks = [];
            while (tasks.length < this.maxLeavesPerRequest && this.queue.length > 0 && query.length < 1536) {
                var next = this.getNextTask();
                if (next == null)
                    break;
                if (query.length > 0)
                    query += "+";
                query += next.getApiQueryToken();
                tasks.push(next);
            }
            if (tasks.length === 0)
                return;
            this.active.push(tasks);
            var url = this.map.info.facesUrl
                .replace("{tokens}", query);
            $.getJSON(url, function (data) {
                for (var i = 0; i < data.facesList.length; ++i) {
                    var faces = data.facesList[i];
                    var task = tasks[i];
                    var handles = _this.map.meshManager.addMeshData(new MeshData(faces));
                    task.onLoadFaces(handles);
                }
            }).fail(function () {
                var rangesStr = query.replace("+", ", ");
                console.log("Failed to load leaf faces [" + rangesStr + "].");
            }).always(function () {
                var index = _this.active.indexOf(tasks);
                _this.active.splice(index, 1);
                _this.update();
            });
        };
        return FaceLoader;
    }());
    SourceUtils.FaceLoader = FaceLoader;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var Loader = (function () {
        function Loader() {
            this.maxConcurrentRequests = 4;
            this.queue = [];
            this.loaded = {};
            this.active = 0;
        }
        Loader.prototype.load = function (url) {
            var loaded = this.loaded[url];
            if (loaded != null)
                return loaded;
            loaded = this.onCreateItem(url);
            this.loaded[url] = loaded;
            this.enqueueItem(loaded);
            return loaded;
        };
        Loader.prototype.enqueueItem = function (item) {
            this.queue.push(item);
        };
        Loader.prototype.getNextToLoad = function () {
            if (this.queue.length <= 0 || this.active >= this.maxConcurrentRequests)
                return null;
            var bestIndex = 0;
            var bestItem = this.queue[0];
            for (var i = 1, iEnd = this.queue.length; i < iEnd; ++i) {
                var item = this.queue[i];
                if (!item.shouldLoadBefore(bestItem))
                    continue;
                bestIndex = i;
                bestItem = item;
            }
            return this.queue.splice(bestIndex, 1)[0];
        };
        Loader.prototype.update = function () {
            var _this = this;
            var next;
            var _loop_1 = function () {
                ++this_1.active;
                var nextCopy = next;
                next.loadNext(function (requeue) {
                    --_this.active;
                    if (requeue)
                        _this.queue.push(nextCopy);
                });
            };
            var this_1 = this;
            while ((next = this.getNextToLoad()) != null) {
                _loop_1();
            }
        };
        return Loader;
    }());
    SourceUtils.Loader = Loader;
})(SourceUtils || (SourceUtils = {}));
/// <reference path="AppBase.ts"/>
var SourceUtils;
(function (SourceUtils) {
    var Map = (function (_super) {
        __extends(Map, _super);
        function Map(app, url) {
            var _this = _super.call(this) || this;
            _this.loaders = [];
            _this.models = [];
            _this.displacements = [];
            _this.staticProps = [];
            _this.materials = [];
            _this.app = app;
            _this.faceLoader = _this.addLoader(new SourceUtils.FaceLoader(_this));
            _this.textureLoader = _this.addLoader(new SourceUtils.TextureLoader(app.getContext()));
            _this.modelLoader = _this.addLoader(new SourceUtils.StudioModelLoader(_this));
            _this.meshManager = new SourceUtils.WorldMeshManager(app.getContext());
            _this.shaderManager = new SourceUtils.ShaderManager(app.getContext());
            _this.blankTexture = new SourceUtils.BlankTexture(app.getContext(), new THREE.Color(1, 1, 1));
            _this.blankMaterial = new SourceUtils.Material(_this, "LightmappedGeneric");
            _this.blankMaterial.properties.baseTexture = _this.blankTexture;
            _this.errorMaterial = new SourceUtils.Material(_this, "LightmappedGeneric");
            _this.errorMaterial.properties.baseTexture = new SourceUtils.ErrorTexture(app.getContext());
            _this.loadInfo(url);
            return _this;
        }
        Map.prototype.addLoader = function (loader) {
            this.loaders.push(loader);
            return loader;
        };
        Map.prototype.getApp = function () {
            return this.app;
        };
        Map.prototype.getLightmap = function () {
            return this.lightmap || this.blankTexture;
        };
        Map.prototype.getBlankTexture = function () {
            return this.blankTexture;
        };
        Map.prototype.getWorldSpawn = function () {
            return this.models.length > 0 ? this.models[0] : null;
        };
        Map.prototype.setSkyMaterialEnabled = function (value) {
            if (this.skyMaterial != null)
                this.skyMaterial.enabled = value;
        };
        Map.prototype.getMaterial = function (index) {
            return index === -1
                ? this.skyMaterial
                : (index < this.materials.length ? this.materials[index] : this.blankMaterial) || this.errorMaterial;
        };
        Map.prototype.loadInfo = function (url) {
            var _this = this;
            $.getJSON(url, function (data) {
                _this.info = data;
                _this.models = new Array(data.numModels);
                _this.clusters = new Array(data.numClusters);
                for (var i = 0; i < data.numClusters; ++i) {
                    _this.clusters[i] = new Array();
                }
                _this.pvsArray = new Array(data.numClusters);
                _this.loadDisplacements();
                _this.loadMaterials();
                _this.lightmap = new SourceUtils.Lightmap(_this.app.getContext(), data.lightmapUrl);
                _this.skyMaterial = new SourceUtils.Material(_this, data.skyMaterial);
                for (var i = 0; i < data.brushEnts.length; ++i) {
                    var ent = data.brushEnts[i];
                    if (_this.models[ent.model] !== undefined)
                        throw "Multiple models with the same index.";
                    _this.models[ent.model] = new SourceUtils.BspModel(_this, ent);
                }
            });
        };
        Map.prototype.loadDisplacements = function () {
            var _this = this;
            $.getJSON(this.info.displacementsUrl, function (data) {
                _this.displacements = [];
                for (var i = 0; i < data.displacements.length; ++i) {
                    _this.displacements.push(new SourceUtils.Displacement(_this.getWorldSpawn(), data.displacements[i]));
                }
            });
        };
        Map.prototype.loadMaterials = function () {
            var _this = this;
            $.getJSON(this.info.materialsUrl, function (data) {
                _this.materials = [];
                for (var i = 0; i < data.materials.length; ++i) {
                    var mat = data.materials[i];
                    if (mat == null) {
                        _this.materials.push(null);
                    }
                    else {
                        _this.materials.push(new SourceUtils.Material(_this, data.materials[i]));
                    }
                }
            });
        };
        Map.prototype.onModelLoaded = function (model) {
            if (model !== this.getWorldSpawn())
                return;
            var leaves = model.getLeaves();
            for (var i = 0; i < leaves.length; ++i) {
                var leaf = leaves[i];
                if (leaf.cluster === -1)
                    continue;
                this.clusters[leaf.cluster].push(leaf);
            }
        };
        Map.prototype.update = function () {
            for (var i = 0; i < this.loaders.length; ++i) {
                this.loaders[i].update();
            }
        };
        Map.prototype.getPvsArray = function (root, callback) {
            var pvs = this.pvsArray[root.cluster];
            if (pvs != null) {
                callback(pvs);
                return;
            }
            this.loadPvsArray(root, callback);
        };
        Map.prototype.isAnyClusterVisible = function (clusters, drawList) {
            for (var j = 0, jEnd = clusters.length; j < jEnd; ++j) {
                if (this.clusters[clusters[j]][0].getIsInDrawList(drawList))
                    return true;
            }
            return false;
        };
        Map.prototype.appendToDrawList = function (drawList, pvs) {
            for (var i = 0, iEnd = pvs.length; i < iEnd; ++i) {
                drawList.addItem(pvs[i]);
            }
            for (var i = this.displacements.length - 1; i >= 0; --i) {
                var disp = this.displacements[i];
                if (this.isAnyClusterVisible(disp.clusters, drawList)) {
                    drawList.addItem(disp);
                }
            }
            for (var i = 1, iEnd = this.models.length; i < iEnd; ++i) {
                var model = this.models[i];
                if (model == null)
                    continue;
                if (!this.isAnyClusterVisible(model.clusters, drawList))
                    continue;
                var leaves = model.getLeaves();
                for (var j = 0, jEnd = leaves.length; j < jEnd; ++j) {
                    drawList.addItem(leaves[j]);
                }
            }
            for (var i = 0, iEnd = this.staticProps.length; i < iEnd; ++i) {
                var prop = this.staticProps[i];
                if (prop == null)
                    continue;
                if (!this.isAnyClusterVisible(prop.clusters, drawList))
                    continue;
                drawList.addItem(prop.getDrawListItem());
            }
        };
        Map.prototype.loadPvsArray = function (root, callback) {
            var _this = this;
            var pvs = this.pvsArray[root.cluster] = [];
            var url = this.info.visibilityUrl.replace("{index}", root.cluster.toString());
            $.getJSON(url, function (data) {
                var indices = SourceUtils.Utils.decompress(data.pvs);
                for (var i = 0; i < indices.length; ++i) {
                    var cluster = _this.clusters[indices[i]];
                    for (var j = 0; j < cluster.length; ++j) {
                        pvs.push(cluster[j]);
                    }
                }
                if (callback != null)
                    callback(pvs);
            });
        };
        return Map;
    }(SourceUtils.Entity));
    SourceUtils.Map = Map;
})(SourceUtils || (SourceUtils = {}));
/// <reference path="AppBase.ts"/>
var SourceUtils;
(function (SourceUtils) {
    var MapViewer = (function (_super) {
        __extends(MapViewer, _super);
        function MapViewer() {
            var _this = _super.call(this) || this;
            _this.lookAngs = new THREE.Vector2();
            _this.lookQuat = new THREE.Quaternion(0, 0, 0, 1);
            _this.countedFrames = 0;
            _this.frameCountStart = 0;
            _this.totalRenderTime = 0;
            _this.lastAvgRenderTime = 0;
            _this.lastAvgFrameTime = 0;
            _this.debugPanelInvalid = false;
            _this.spawned = false;
            _this.unitZ = new THREE.Vector3(0, 0, 1);
            _this.unitX = new THREE.Vector3(1, 0, 0);
            _this.tempQuat = new THREE.Quaternion();
            _this.skyCameraPos = new THREE.Vector3();
            _this.canLockPointer = true;
            _this.frameCountStart = performance.now();
            return _this;
        }
        MapViewer.prototype.init = function (container) {
            this.camera = new SourceUtils.PerspectiveCamera(75, container.innerWidth() / container.innerHeight(), 1, 8192);
            _super.prototype.init.call(this, container);
            this.getContext().clearColor(100 / 255, 149 / 255, 237 / 255, 1);
            this.updateCameraAngles();
        };
        MapViewer.prototype.loadMap = function (url) {
            this.map = new SourceUtils.Map(this, url);
            this.mainRenderContext = new SourceUtils.RenderContext(this.map, this.camera);
        };
        MapViewer.prototype.onKeyDown = function (key) {
            _super.prototype.onKeyDown.call(this, key);
            if (key === SourceUtils.Key.F) {
                this.toggleFullscreen();
            }
        };
        MapViewer.prototype.onUpdateCamera = function () {
            this.camera.setAspect(this.getWidth() / this.getHeight());
            if (this.skyCamera != null)
                this.skyCamera.setAspect(this.camera.getAspect());
        };
        MapViewer.prototype.updateCameraAngles = function () {
            if (this.lookAngs.y < -Math.PI * 0.5)
                this.lookAngs.y = -Math.PI * 0.5;
            if (this.lookAngs.y > Math.PI * 0.5)
                this.lookAngs.y = Math.PI * 0.5;
            this.lookQuat.setFromAxisAngle(this.unitZ, this.lookAngs.x);
            this.tempQuat.setFromAxisAngle(this.unitX, this.lookAngs.y + Math.PI * 0.5);
            this.lookQuat.multiply(this.tempQuat);
            this.camera.setRotation(this.lookQuat);
        };
        MapViewer.prototype.onMouseLook = function (delta) {
            _super.prototype.onMouseLook.call(this, delta);
            this.lookAngs.sub(delta.multiplyScalar(1 / 800));
            this.updateCameraAngles();
        };
        MapViewer.prototype.onUpdateFrame = function (dt) {
            _super.prototype.onUpdateFrame.call(this, dt);
            if (!this.spawned) {
                if (this.map.info == null)
                    return;
                this.spawned = true;
                this.camera.setPosition(this.map.info.playerStarts[0]);
                this.camera.translate(0, 0, 64);
                this.mainRenderContext.fogParams = this.map.info.fog;
                if (this.map.info.fog.fogEnabled && this.map.info.fog.farZ !== -1) {
                    this.camera.setFar(this.map.info.fog.farZ);
                }
                if (this.map.info.skyCamera.enabled) {
                    this.skyCamera = new SourceUtils.PerspectiveCamera(this.camera.getFov(), this.camera.getAspect(), this.camera.getNear(), this.camera.getFar());
                    this.skyRenderContext = new SourceUtils.RenderContext(this.map, this.skyCamera);
                    this.skyRenderContext.fogParams = this.map.info.skyCamera;
                }
            }
            this.map.update();
            var move = new THREE.Vector3();
            var moveSpeed = 512 * dt;
            if (this.isKeyDown(SourceUtils.Key.W))
                move.z -= moveSpeed;
            if (this.isKeyDown(SourceUtils.Key.S))
                move.z += moveSpeed;
            if (this.isKeyDown(SourceUtils.Key.A))
                move.x -= moveSpeed;
            if (this.isKeyDown(SourceUtils.Key.D))
                move.x += moveSpeed;
            if (move.lengthSq() > 0) {
                this.camera.applyRotationTo(move);
                this.camera.translate(move);
                this.invalidateDebugPanel();
            }
            if (this.debugPanelInvalid) {
                this.debugPanelInvalid = false;
                this.updateDebugPanel();
            }
        };
        MapViewer.prototype.invalidateDebugPanel = function () {
            this.debugPanelInvalid = true;
        };
        MapViewer.prototype.initDebugPanel = function () {
            this.debugPanel
                .html('<span class="debug-label">Render time:</span>&nbsp;<span class="debug-value" id="debug-render-time"></span><br/>'
                + '<span class="debug-label">Frame time:</span>&nbsp;<span class="debug-value" id="debug-frame-time"></span><br/>'
                + '<span class="debug-label">Frame rate:</span>&nbsp;<span class="debug-value" id="debug-frame-rate"></span><br/>'
                + '<span class="debug-label">Draw calls:</span>&nbsp;<span class="debug-value" id="debug-draw-calls"></span><br/>'
                + '<span class="debug-label">Camera pos:</span>&nbsp;<span class="debug-value" id="debug-camera-pos"></span>');
        };
        MapViewer.prototype.updateDebugPanel = function () {
            if (this.debugPanel == null)
                return;
            if (this.lastDebugPanel !== this.debugPanel) {
                this.lastDebugPanel = this.debugPanel;
                this.initDebugPanel();
            }
            var drawCalls = this.mainRenderContext.getDrawCallCount();
            if (this.skyRenderContext != null) {
                drawCalls += this.skyRenderContext.getDrawCallCount();
            }
            var cameraPos = new THREE.Vector3();
            this.camera.getPosition(cameraPos);
            this.debugPanel.find("#debug-render-time").text(this.lastAvgRenderTime.toPrecision(5) + " ms");
            this.debugPanel.find("#debug-frame-time").text(this.lastAvgFrameTime.toPrecision(5) + " ms");
            this.debugPanel.find("#debug-frame-rate").text((1000 / this.lastAvgFrameTime).toPrecision(5) + " fps");
            this.debugPanel.find("#debug-draw-calls").text("" + drawCalls);
            this.debugPanel.find("#debug-camera-pos").text(Math.round(cameraPos.x) + ", " + Math.round(cameraPos.y) + ", " + Math.round(cameraPos.z));
        };
        MapViewer.prototype.onRenderFrame = function (dt) {
            var gl = this.getContext();
            var t0 = performance.now();
            gl.clear(gl.DEPTH_BUFFER_BIT);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LESS);
            gl.enable(gl.CULL_FACE);
            gl.cullFace(gl.FRONT);
            if (this.skyRenderContext != null && this.mainRenderContext.canSeeSky3D()) {
                this.map.setSkyMaterialEnabled(true);
                this.camera.getPosition(this.skyCameraPos);
                this.skyCameraPos.divideScalar(this.map.info.skyCamera.scale);
                this.skyCameraPos.add(this.map.info.skyCamera.origin);
                this.skyCamera.copyRotation(this.camera);
                this.skyCamera.setPosition(this.skyCameraPos);
                this.skyRenderContext.render();
                gl.clear(gl.DEPTH_BUFFER_BIT);
                this.map.setSkyMaterialEnabled(false);
            }
            else if (this.mainRenderContext.canSeeSky2D()) {
                this.map.setSkyMaterialEnabled(true);
            }
            if (this.mainRenderContext != null) {
                this.mainRenderContext.render();
            }
            gl.finish();
            var t1 = performance.now();
            this.totalRenderTime += (t1 - t0);
            this.countedFrames += 1;
            if (this.countedFrames > 100) {
                this.lastAvgRenderTime = this.totalRenderTime / this.countedFrames;
                this.lastAvgFrameTime = (t1 - this.frameCountStart) / this.countedFrames;
                this.frameCountStart = t1;
                this.invalidateDebugPanel();
                this.totalRenderTime = 0;
                this.countedFrames = 0;
            }
        };
        return MapViewer;
    }(SourceUtils.AppBase));
    SourceUtils.MapViewer = MapViewer;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var MaterialProperties = (function () {
        function MaterialProperties() {
            this.baseTexture = null;
            this.baseTexture2 = null;
            this.blendModulateTexture = null;
            this.alphaTest = false;
            this.alpha = 1;
            this.noCull = false;
        }
        return MaterialProperties;
    }());
    SourceUtils.MaterialProperties = MaterialProperties;
    var Material = (function () {
        function Material(map, infoOrShader) {
            this.properties = new MaterialProperties();
            this.enabled = true;
            this.map = map;
            this.sortIndex = Material.nextSortIndex++;
            if (typeof infoOrShader == "string") {
                this.program = map.shaderManager.get(infoOrShader);
            }
            else {
                this.info = infoOrShader;
                this.program = map.shaderManager.get(this.info.shader);
                for (var i = 0; i < this.info.properties.length; ++i) {
                    this.addPropertyFromInfo(this.info.properties[i]);
                }
            }
        }
        Material.prototype.addPropertyFromInfo = function (info) {
            switch (info.type) {
                case SourceUtils.Api.MaterialPropertyType.boolean:
                case SourceUtils.Api.MaterialPropertyType.number:
                    this.properties[info.name] = info.value;
                    break;
                case SourceUtils.Api.MaterialPropertyType.texture2D:
                    this.properties[info.name] = this.map.textureLoader.load2D(info.value);
                    break;
                case SourceUtils.Api.MaterialPropertyType.textureCube:
                    this.properties[info.name] = this.map.textureLoader.loadCube(info.value);
                    break;
            }
        };
        Material.prototype.compareTo = function (other) {
            if (other === this)
                return 0;
            var programCompare = this.program.compareTo(other.program);
            if (programCompare !== 0)
                return programCompare;
            return this.sortIndex - other.sortIndex;
        };
        Material.prototype.getMap = function () {
            return this.map;
        };
        Material.prototype.getProgram = function () {
            return this.program;
        };
        Material.prototype.prepareForRendering = function () {
            return this.enabled && this.program.changeMaterial(this);
        };
        return Material;
    }());
    Material.nextSortIndex = 0;
    SourceUtils.Material = Material;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var PropStatic = (function (_super) {
        __extends(PropStatic, _super);
        function PropStatic(map, url) {
            var _this = _super.call(this) || this;
            _this.clusters = [];
            _this.drawListItem = new SourceUtils.StudioModelDrawListItem(map, url);
            _this.drawListItem.parent = _this;
            return _this;
        }
        PropStatic.prototype.getDrawListItem = function () {
            return this.drawListItem;
        };
        return PropStatic;
    }(SourceUtils.Entity));
    SourceUtils.PropStatic = PropStatic;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var ShaderManager = (function () {
        function ShaderManager(gl) {
            this.programs = {};
            this.gl = gl;
        }
        ShaderManager.prototype.getContext = function () {
            return this.gl;
        };
        ShaderManager.prototype.getCurrentProgram = function () {
            return this.currentProgram;
        };
        ShaderManager.prototype.setCurrentProgram = function (program) {
            if (this.currentProgram != null) {
                this.currentProgram.disableMeshComponents();
            }
            this.currentProgram = program;
        };
        ShaderManager.prototype.get = function (name) {
            var program = this.programs[name];
            if (program !== undefined)
                return program;
            var Type = Shaders[name];
            if (Type === undefined)
                throw "Unknown shader name '" + name + "'.";
            return this.programs[name] = new Type(this);
        };
        ShaderManager.prototype.dispose = function () {
            for (var name_1 in this.programs) {
                if (this.programs.hasOwnProperty(name_1)) {
                    this.programs[name_1].dispose();
                }
            }
            this.programs = {};
        };
        return ShaderManager;
    }());
    SourceUtils.ShaderManager = ShaderManager;
    var ShaderProgramAttributes = (function () {
        function ShaderProgramAttributes() {
        }
        return ShaderProgramAttributes;
    }());
    SourceUtils.ShaderProgramAttributes = ShaderProgramAttributes;
    var Uniform = (function () {
        function Uniform(program, name) {
            this.program = program;
            this.name = name;
            this.gl = program.getContext();
        }
        Uniform.prototype.getLocation = function () {
            if (this.location !== undefined)
                return this.location;
            if (!this.program.isCompiled())
                return undefined;
            this.location = this.gl.getUniformLocation(this.program.getProgram(), this.name);
        };
        Uniform.prototype.set1i = function (x) {
            this.gl.uniform1i(this.getLocation(), x);
        };
        Uniform.prototype.set1f = function (x) {
            this.gl.uniform1f(this.getLocation(), x);
        };
        Uniform.prototype.set2f = function (x, y) {
            this.gl.uniform2f(this.getLocation(), x, y);
        };
        Uniform.prototype.set3f = function (x, y, z) {
            this.gl.uniform3f(this.getLocation(), x, y, z);
        };
        Uniform.prototype.set4f = function (x, y, z, w) {
            this.gl.uniform4f(this.getLocation(), x, y, z, w);
        };
        Uniform.prototype.setMatrix4f = function (value, transpose) {
            if (transpose === void 0) { transpose = false; }
            this.gl.uniformMatrix4fv(this.getLocation(), transpose, value);
        };
        return Uniform;
    }());
    SourceUtils.Uniform = Uniform;
    var ShaderProgram = (function () {
        function ShaderProgram(manager) {
            this.compiled = false;
            this.attribNames = {};
            this.attribs = {};
            this.sortOrder = 0;
            this.enabledComponents = 0;
            this.manager = manager;
            this.sortIndex = ShaderProgram.nextSortIndex++;
            this.projectionMatrix = new Uniform(this, "uProjection");
            this.modelViewMatrix = new Uniform(this, "uModelView");
        }
        ShaderProgram.prototype.dispose = function () {
            if (this.program !== undefined) {
                this.getContext().deleteProgram(this.program);
                this.program = undefined;
            }
        };
        ShaderProgram.prototype.compareTo = function (other) {
            if (other === this)
                return 0;
            var orderCompare = this.sortOrder - other.sortOrder;
            if (orderCompare !== 0)
                return orderCompare;
            return this.sortIndex - other.sortIndex;
        };
        ShaderProgram.prototype.getProgram = function () {
            if (this.program === undefined) {
                return this.program = this.getContext().createProgram();
            }
            return this.program;
        };
        ShaderProgram.prototype.setVertexAttribPointer = function (component, size, type, normalized, stride, offset) {
            var loc = this.attribs[component];
            if (loc === undefined)
                return;
            this.getContext().vertexAttribPointer(loc, size, type, normalized, stride, offset);
        };
        ShaderProgram.prototype.isCompiled = function () {
            return this.compiled;
        };
        ShaderProgram.prototype.use = function () {
            if (this.program === undefined)
                return false;
            if (this.manager.getCurrentProgram() === this)
                return true;
            this.manager.setCurrentProgram(this);
            this.getContext().useProgram(this.program);
            return true;
        };
        ShaderProgram.prototype.addAttribute = function (name, component) {
            this.attribNames[name] = component;
        };
        ShaderProgram.prototype.getContext = function () {
            return this.manager.getContext();
        };
        ShaderProgram.prototype.getShaderSource = function (url, action) {
            var _this = this;
            $.get(url + "?v=" + Math.random(), function (source) {
                var match = source.match(ShaderProgram.includeRegex);
                if (match == null) {
                    action(source);
                    return;
                }
                var fileName = match[1];
                var dirName = url.substr(0, url.lastIndexOf("/") + 1);
                _this.getShaderSource("" + dirName + fileName, function (include) {
                    action(source.replace(match[0], include));
                });
            });
        };
        ShaderProgram.prototype.loadShaderSource = function (type, url) {
            var _this = this;
            this.getShaderSource(url, function (source) { return _this.onLoadShaderSource(type, source); });
        };
        ShaderProgram.prototype.hasAllSources = function () {
            return this.vertSource !== undefined && this.fragSource !== undefined;
        };
        ShaderProgram.prototype.onLoadShaderSource = function (type, source) {
            switch (type) {
                case WebGLRenderingContext.VERTEX_SHADER:
                    this.vertSource = source;
                    break;
                case WebGLRenderingContext.FRAGMENT_SHADER:
                    this.fragSource = source;
                    break;
                default:
                    return;
            }
            if (this.hasAllSources()) {
                this.compile();
            }
        };
        ShaderProgram.prototype.compileShader = function (type, source) {
            var gl = this.getContext();
            var shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                var error = "Shader compilation error:\n" + gl.getShaderInfoLog(shader);
                gl.deleteShader(shader);
                console.log(source);
                throw error;
            }
            return shader;
        };
        ShaderProgram.prototype.findAttribLocation = function (name, component) {
            var gl = this.getContext();
            var loc = gl.getAttribLocation(this.program, name);
            if (loc === -1)
                throw "Unable to find attribute with name '" + name + "'.";
            this.attribs[component] = loc;
        };
        ShaderProgram.prototype.compile = function () {
            var gl = this.getContext();
            var vert = this.compileShader(gl.VERTEX_SHADER, this.vertSource);
            var frag = this.compileShader(gl.FRAGMENT_SHADER, this.fragSource);
            var prog = this.getProgram();
            gl.attachShader(prog, vert);
            gl.attachShader(prog, frag);
            gl.linkProgram(prog);
            gl.deleteShader(vert);
            gl.deleteShader(frag);
            if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
                throw "Program linking error: " + gl.getProgramInfoLog(prog);
            }
            this.attribs = new ShaderProgramAttributes();
            for (var name_2 in this.attribNames) {
                if (this.attribNames.hasOwnProperty(name_2)) {
                    this.findAttribLocation(name_2, this.attribNames[name_2]);
                }
            }
            this.compiled = true;
        };
        ShaderProgram.prototype.enableMeshComponents = function (components) {
            var gl = this.getContext();
            var diff = this.enabledComponents ^ components;
            var component = 1;
            while (diff >= component) {
                if ((diff & component) === component) {
                    var attrib = this.attribs[component];
                    if (attrib !== undefined) {
                        if ((components & component) === component)
                            gl.enableVertexAttribArray(attrib);
                        else
                            gl.disableVertexAttribArray(attrib);
                    }
                }
                component <<= 1;
            }
            this.enabledComponents = components;
        };
        ShaderProgram.prototype.disableMeshComponents = function () {
            this.enableMeshComponents(0);
        };
        ShaderProgram.prototype.prepareForRendering = function (map, context) {
            if (!this.isCompiled())
                return;
            this.use();
            this.projectionMatrix.setMatrix4f(context.getProjectionMatrix());
            this.noCull = false;
        };
        ShaderProgram.prototype.changeModelTransform = function (context) {
            if (!this.isCompiled())
                return;
            this.modelViewMatrix.setMatrix4f(context.getModelViewMatrix());
        };
        ShaderProgram.prototype.cleanupPostRender = function (map, context) {
            var gl = this.getContext();
            if (this.noCull)
                gl.enable(gl.CULL_FACE);
        };
        ShaderProgram.prototype.changeMaterial = function (material) {
            var gl = this.getContext();
            if (this.noCull !== material.properties.noCull) {
                this.noCull = material.properties.noCull;
                if (this.noCull)
                    gl.disable(gl.CULL_FACE);
                else
                    gl.enable(gl.CULL_FACE);
            }
            return true;
        };
        ShaderProgram.prototype.setTexture = function (uniform, target, unit, value, defaultValue) {
            var gl = this.getContext();
            if (value == null || !value.isLoaded()) {
                if (defaultValue == null)
                    return false;
                value = defaultValue;
            }
            gl.activeTexture(gl.TEXTURE0 + unit);
            gl.bindTexture(target, value.getHandle());
            uniform.set1i(unit);
            return true;
        };
        return ShaderProgram;
    }());
    ShaderProgram.nextSortIndex = 0;
    ShaderProgram.includeRegex = /^\s*#include\s+\"([^"]+)\"\s*$/m;
    SourceUtils.ShaderProgram = ShaderProgram;
    var Shaders;
    (function (Shaders) {
        var LightmappedBase = (function (_super) {
            __extends(LightmappedBase, _super);
            function LightmappedBase(manager) {
                var _this = _super.call(this, manager) || this;
                _this.sortOrder = 0;
                _this.addAttribute("aPosition", SourceUtils.Api.MeshComponent.position);
                _this.addAttribute("aTextureCoord", SourceUtils.Api.MeshComponent.uv);
                _this.addAttribute("aLightmapCoord", SourceUtils.Api.MeshComponent.uv2);
                _this.baseTexture = new Uniform(_this, "uBaseTexture");
                _this.lightmap = new Uniform(_this, "uLightmap");
                _this.lightmapParams = new Uniform(_this, "uLightmapParams");
                _this.fogParams = new Uniform(_this, "uFogParams");
                _this.fogColor = new Uniform(_this, "uFogColor");
                return _this;
            }
            LightmappedBase.prototype.prepareForRendering = function (map, context) {
                _super.prototype.prepareForRendering.call(this, map, context);
                var fog = context.fogParams;
                if (fog != null && fog.fogEnabled) {
                    var densMul = fog.fogMaxDensity / ((fog.fogEnd - fog.fogStart) * (context.far - context.near));
                    var nearDensity = (context.near - fog.fogStart) * densMul;
                    var farDensity = (context.far - fog.fogStart) * densMul;
                    var clrMul = 1 / 255;
                    this.fogParams.set4f(nearDensity, farDensity, 0, fog.fogMaxDensity);
                    this.fogColor.set3f(fog.fogColor.r * clrMul, fog.fogColor.g * clrMul, fog.fogColor.b * clrMul);
                }
                else {
                    this.fogParams.set4f(0, 0, 0, 0);
                }
                var lightMap = map.getLightmap();
                var gl = this.getContext();
                this.setTexture(this.lightmap, gl.TEXTURE_2D, 5, lightMap, map.getBlankTexture());
                if (lightMap != null && lightMap.isLoaded()) {
                    this.lightmapParams.set4f(lightMap.width, lightMap.height, 1 / lightMap.width, 1 / lightMap.height);
                }
                else {
                    this.lightmapParams.set4f(1, 1, 1, 1);
                }
            };
            LightmappedBase.prototype.changeMaterial = function (material) {
                if (!_super.prototype.changeMaterial.call(this, material))
                    return false;
                var gl = this.getContext();
                var blank = material.getMap().getBlankTexture();
                this.setTexture(this.baseTexture, gl.TEXTURE_2D, 0, material.properties.baseTexture, blank);
                return true;
            };
            return LightmappedBase;
        }(ShaderProgram));
        Shaders.LightmappedBase = LightmappedBase;
        var LightmappedGeneric = (function (_super) {
            __extends(LightmappedGeneric, _super);
            function LightmappedGeneric(manager) {
                var _this = _super.call(this, manager) || this;
                var gl = _this.getContext();
                _this.loadShaderSource(gl.VERTEX_SHADER, "/shaders/LightmappedGeneric.vert.txt");
                _this.loadShaderSource(gl.FRAGMENT_SHADER, "/shaders/LightmappedGeneric.frag.txt");
                _this.alphaTest = new Uniform(_this, "uAlphaTest");
                return _this;
            }
            LightmappedGeneric.prototype.changeMaterial = function (material) {
                if (!_super.prototype.changeMaterial.call(this, material))
                    return false;
                this.alphaTest.set1f(material.properties.alphaTest ? 1 : 0);
                return true;
            };
            return LightmappedGeneric;
        }(LightmappedBase));
        Shaders.LightmappedGeneric = LightmappedGeneric;
        var LightmappedTranslucent = (function (_super) {
            __extends(LightmappedTranslucent, _super);
            function LightmappedTranslucent(manager) {
                var _this = _super.call(this, manager) || this;
                _this.sortOrder = 2000;
                var gl = _this.getContext();
                _this.loadShaderSource(gl.VERTEX_SHADER, "/shaders/LightmappedGeneric.vert.txt");
                _this.loadShaderSource(gl.FRAGMENT_SHADER, "/shaders/LightmappedTranslucent.frag.txt");
                _this.alpha = new Uniform(_this, "uAlpha");
                return _this;
            }
            LightmappedTranslucent.prototype.prepareForRendering = function (map, context) {
                _super.prototype.prepareForRendering.call(this, map, context);
                var gl = this.getContext();
                gl.depthMask(false);
                gl.enable(gl.BLEND);
                gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            };
            LightmappedTranslucent.prototype.changeMaterial = function (material) {
                if (!_super.prototype.changeMaterial.call(this, material))
                    return false;
                this.alpha.set1f(material.properties.alpha);
                return true;
            };
            LightmappedTranslucent.prototype.cleanupPostRender = function (map, context) {
                var gl = this.getContext();
                gl.depthMask(true);
                gl.disable(gl.BLEND);
                _super.prototype.cleanupPostRender.call(this, map, context);
            };
            return LightmappedTranslucent;
        }(LightmappedBase));
        Shaders.LightmappedTranslucent = LightmappedTranslucent;
        var Lightmapped2WayBlend = (function (_super) {
            __extends(Lightmapped2WayBlend, _super);
            function Lightmapped2WayBlend(manager) {
                var _this = _super.call(this, manager) || this;
                _this.addAttribute("aAlpha", SourceUtils.Api.MeshComponent.alpha);
                var gl = _this.getContext();
                _this.loadShaderSource(gl.VERTEX_SHADER, "/shaders/Lightmapped2WayBlend.vert.txt");
                _this.loadShaderSource(gl.FRAGMENT_SHADER, "/shaders/Lightmapped2WayBlend.frag.txt");
                _this.baseTexture2 = new Uniform(_this, "uBaseTexture2");
                _this.blendModulateTexture = new Uniform(_this, "uBlendModulateTexture");
                return _this;
            }
            Lightmapped2WayBlend.prototype.changeMaterial = function (material) {
                if (!_super.prototype.changeMaterial.call(this, material))
                    return false;
                var gl = this.getContext();
                var blank = material.getMap().getBlankTexture();
                this.setTexture(this.baseTexture, gl.TEXTURE_2D, 1, material.properties.baseTexture2, blank);
                this.setTexture(this.blendModulateTexture, gl.TEXTURE_2D, 2, material.properties.blendModulateTexture, blank);
                return true;
            };
            return Lightmapped2WayBlend;
        }(LightmappedBase));
        Shaders.Lightmapped2WayBlend = Lightmapped2WayBlend;
        var Sky = (function (_super) {
            __extends(Sky, _super);
            function Sky(manager) {
                var _this = _super.call(this, manager) || this;
                _this.sortOrder = 1000;
                var gl = _this.getContext();
                _this.loadShaderSource(gl.VERTEX_SHADER, "/shaders/Sky.vert.txt");
                _this.loadShaderSource(gl.FRAGMENT_SHADER, "/shaders/Sky.frag.txt");
                _this.addAttribute("aPosition", SourceUtils.Api.MeshComponent.position);
                _this.cameraPos = new Uniform(_this, "uCameraPos");
                _this.skyCube = new Uniform(_this, "uSkyCube");
                return _this;
            }
            Sky.prototype.prepareForRendering = function (map, context) {
                _super.prototype.prepareForRendering.call(this, map, context);
                this.cameraPos.set3f(context.origin.x, context.origin.y, context.origin.z);
            };
            Sky.prototype.changeMaterial = function (material) {
                _super.prototype.changeMaterial.call(this, material);
                var gl = this.getContext();
                var tex = material.properties.baseTexture;
                return this.setTexture(this.skyCube, gl.TEXTURE_CUBE_MAP, 0, tex);
            };
            return Sky;
        }(ShaderProgram));
        Shaders.Sky = Sky;
    })(Shaders = SourceUtils.Shaders || (SourceUtils.Shaders = {}));
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var SmdModel = (function () {
        function SmdModel(mdl, info) {
            this.mdl = mdl;
            this.info = info;
        }
        SmdModel.prototype.getMeshHandles = function () {
            return this.handles;
        };
        SmdModel.prototype.loadNext = function (callback) {
            if (this.vertices == null) {
                this.loadVertices(callback);
            }
            else if (this.indices == null) {
                this.loadIndices(callback);
            }
            else {
                callback(false);
            }
        };
        SmdModel.prototype.loadVertices = function (callback) {
            var _this = this;
            $.getJSON(this.info.verticesUrl, function (data) {
                _this.vertices = data;
                callback(true);
            }).fail(function () { return callback(false); });
        };
        SmdModel.prototype.loadIndices = function (callback) {
            var _this = this;
            $.getJSON(this.info.trianglesUrl, function (data) {
                _this.indices = data;
                _this.acquireMeshHandles();
            }).always(function () { return callback(false); });
        };
        SmdModel.prototype.acquireMeshHandles = function () {
            var meshData = new SourceUtils.MeshData(this.vertices, this.indices);
            for (var i = 0; i < this.info.meshes.length && i < meshData.elements.length; ++i) {
                var mesh = this.info.meshes[i];
                var offset = mesh.vertexOffset;
                var element = meshData.elements[i];
                element.material = mesh.material;
                if (offset === 0)
                    continue;
                for (var j = element.offset, jEnd = element.offset + element.count; j < jEnd; ++j) {
                    meshData.indices[j] += offset;
                }
            }
            this.handles = this.mdl.getMap().meshManager.addMeshData(meshData);
            for (var i = 0; i < this.handles.length; ++i) {
                this.handles[i].material = this.mdl.getMaterial(this.handles[i].materialIndex);
            }
            this.vertices = null;
            this.indices = null;
        };
        return SmdModel;
    }());
    SourceUtils.SmdModel = SmdModel;
    var SmdBodyPart = (function () {
        function SmdBodyPart(mdl, info) {
            this.name = info.name;
            this.models = [];
            for (var i = 0; i < info.models.length; ++i) {
                this.models.push(new SmdModel(mdl, info.models[i]));
            }
        }
        return SmdBodyPart;
    }());
    SourceUtils.SmdBodyPart = SmdBodyPart;
    var StudioModel = (function () {
        function StudioModel(map, url) {
            this.meshLoadCallbacks = [];
            this.map = map;
            this.mdlUrl = url;
        }
        StudioModel.prototype.getMap = function () { return this.map; };
        StudioModel.prototype.getMaterial = function (index) {
            return this.materials[index];
        };
        StudioModel.prototype.shouldLoadBefore = function (other) {
            return true;
        };
        StudioModel.prototype.loadNext = function (callback) {
            var _this = this;
            if (this.info == null) {
                this.loadInfo(callback);
                return;
            }
            if (this.toLoad.length === 0) {
                callback(false);
                return;
            }
            var next = this.toLoad[0];
            next.loadNext(function (requeue2) {
                if (!requeue2) {
                    _this.toLoad.splice(0, 1);
                    if (next.getMeshHandles() != null) {
                        _this.dispatchMeshLoadEvent(next);
                    }
                }
                callback(_this.toLoad.length > 0);
            });
        };
        StudioModel.prototype.dispatchMeshLoadEvent = function (model) {
            for (var i = 0; i < this.meshLoadCallbacks.length; ++i) {
                this.meshLoadCallbacks[i](model);
            }
        };
        StudioModel.prototype.addMeshLoadCallback = function (callback) {
            this.meshLoadCallbacks.push(callback);
        };
        StudioModel.prototype.loadInfo = function (callback) {
            var _this = this;
            $.getJSON(this.mdlUrl, function (data) {
                _this.info = data;
                _this.materials = [];
                _this.bodyParts = [];
                _this.toLoad = [];
                for (var i = 0; i < data.materials.length; ++i) {
                    _this.materials.push(new SourceUtils.Material(_this.map, data.materials[i]));
                }
                for (var i = 0; i < data.bodyParts.length; ++i) {
                    var bodyPart = new SmdBodyPart(_this, data.bodyParts[i]);
                    _this.bodyParts.push(bodyPart);
                    for (var j = 0; j < bodyPart.models.length; ++j) {
                        _this.toLoad.push(bodyPart.models[j]);
                    }
                }
                callback(true);
            }).fail(function () { return callback(false); });
        };
        return StudioModel;
    }());
    SourceUtils.StudioModel = StudioModel;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var StudioModelLoader = (function (_super) {
        __extends(StudioModelLoader, _super);
        function StudioModelLoader(map) {
            var _this = _super.call(this) || this;
            _this.map = map;
            return _this;
        }
        StudioModelLoader.prototype.onCreateItem = function (url) {
            return new SourceUtils.StudioModel(this.map, url);
        };
        return StudioModelLoader;
    }(SourceUtils.Loader));
    SourceUtils.StudioModelLoader = StudioModelLoader;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var Texture = (function () {
        function Texture(gl, target) {
            this.highestLevel = Number.MIN_VALUE;
            this.lowestLevel = Number.MAX_VALUE;
            this.context = gl;
            this.target = target;
            this.minFilter = gl.LINEAR;
            this.magFilter = gl.LINEAR;
        }
        Texture.prototype.isLoaded = function () {
            return this.getHandle() !== undefined;
        };
        Texture.prototype.getContext = function () {
            return this.context;
        };
        Texture.prototype.getHandle = function () {
            this.onGetHandle();
            return this.handle;
        };
        Texture.prototype.getHighestMipLevel = function () {
            return this.highestLevel;
        };
        Texture.prototype.getLowestMipLevel = function () {
            return this.lowestLevel;
        };
        Texture.prototype.onGetHandle = function () { };
        Texture.prototype.loadLevel = function (url, mipLevel, callBack) {
            var _this = this;
            var image = new Image();
            image.src = url;
            image.onload = function () { return _this.onLoad(image, mipLevel, callBack); };
        };
        Texture.prototype.setupTexParams = function (target) {
            var gl = this.context;
            gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.REPEAT);
            gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, this.minFilter);
            gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, this.magFilter);
            if (this.minFilter !== gl.NEAREST) {
                var anisoExt = gl.getExtension("EXT_texture_filter_anisotropic");
                if (anisoExt != null) {
                    gl.texParameterf(target, anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, 4);
                }
            }
        };
        Texture.prototype.getOrCreateHandle = function () {
            var gl = this.context;
            var firstTime = false;
            if (this.handle === undefined) {
                this.handle = gl.createTexture();
                firstTime = true;
            }
            gl.bindTexture(this.target, this.handle);
            if (firstTime)
                this.setupTexParams(this.target);
            return this.handle;
        };
        Texture.prototype.onLoad = function (image, mipLevel, callBack) {
            var gl = this.context;
            this.getOrCreateHandle();
            gl.texImage2D(this.target, mipLevel, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            if (mipLevel > this.highestLevel) {
                this.highestLevel = mipLevel;
            }
            if (mipLevel < this.lowestLevel) {
                this.lowestLevel = mipLevel;
                if (mipLevel !== 0) {
                    gl.texImage2D(this.target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                }
                else {
                    this.width = image.width;
                    this.height = image.height;
                }
            }
            if (callBack != null)
                callBack();
        };
        Texture.prototype.loadPixels = function (width, height, values) {
            var gl = this.context;
            this.getOrCreateHandle();
            this.width = width;
            this.height = height;
            gl.texImage2D(this.target, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, values);
        };
        return Texture;
    }());
    SourceUtils.Texture = Texture;
    var Lightmap = (function (_super) {
        __extends(Lightmap, _super);
        function Lightmap(gl, url) {
            var _this = _super.call(this, gl, gl.TEXTURE_2D) || this;
            _this.minFilter = gl.NEAREST;
            _this.magFilter = gl.NEAREST;
            _this.loadLevel(url, 0);
            return _this;
        }
        return Lightmap;
    }(Texture));
    SourceUtils.Lightmap = Lightmap;
    var BlankTexture = (function (_super) {
        __extends(BlankTexture, _super);
        function BlankTexture(gl, color) {
            var _this = _super.call(this, gl, gl.TEXTURE_2D) || this;
            _this.loadPixels(1, 1, new Uint8Array([Math.round(color.r * 255), Math.round(color.g * 255), Math.round(color.b * 255), 255]));
            return _this;
        }
        return BlankTexture;
    }(Texture));
    SourceUtils.BlankTexture = BlankTexture;
    var ErrorTexture = (function (_super) {
        __extends(ErrorTexture, _super);
        function ErrorTexture(gl) {
            var _this = _super.call(this, gl, gl.TEXTURE_2D) || this;
            var resolution = 64;
            var pixels = new Uint8Array(resolution * resolution * 4);
            for (var y = 0; y < resolution; ++y)
                for (var x = 0; x < resolution; ++x) {
                    if (((x * 4 / resolution) & 1) === ((y * 4 / resolution) & 1)) {
                        pixels[(x + y * resolution) * 4 + 0] = 0xff;
                        pixels[(x + y * resolution) * 4 + 2] = 0xff;
                    }
                    else {
                        pixels[(x + y * resolution) * 4 + 0] = 0x00;
                        pixels[(x + y * resolution) * 4 + 2] = 0x00;
                    }
                    pixels[(x + y * resolution) * 4 + 1] = 0x00;
                    pixels[(x + y * resolution) * 4 + 3] = 0xff;
                }
            _this.loadPixels(resolution, resolution, pixels);
            return _this;
        }
        return ErrorTexture;
    }(Texture));
    SourceUtils.ErrorTexture = ErrorTexture;
    var ValveTexture = (function (_super) {
        __extends(ValveTexture, _super);
        function ValveTexture(gl, target) {
            var _this = _super.call(this, gl, target) || this;
            _this.usesSinceLastLoad = 0;
            return _this;
        }
        ValveTexture.prototype.shouldLoadBefore = function (other) {
            if (this.usesSinceLastLoad === 0)
                return false;
            var mipCompare = this.getLowestMipLevel() - other.getLowestMipLevel();
            if (mipCompare !== 0)
                return mipCompare > 0;
            var scoreCompare = this.usesSinceLastLoad - other.getUsesSinceLastLoad();
            return scoreCompare > 0;
        };
        ValveTexture.prototype.onGetHandle = function () {
            ++this.usesSinceLastLoad;
        };
        ValveTexture.prototype.getUsesSinceLastLoad = function () {
            return this.usesSinceLastLoad;
        };
        ValveTexture.prototype.loadNext = function (callback) {
            this.usesSinceLastLoad = 0;
        };
        return ValveTexture;
    }(Texture));
    SourceUtils.ValveTexture = ValveTexture;
    var ValveTexture2D = (function (_super) {
        __extends(ValveTexture2D, _super);
        function ValveTexture2D(gl, url) {
            var _this = _super.call(this, gl, gl.TEXTURE_2D) || this;
            _this.vtfUrl = url;
            return _this;
        }
        ValveTexture2D.prototype.loadNext = function (callback) {
            var _this = this;
            _super.prototype.loadNext.call(this, null);
            if (this.info == null) {
                this.loadInfo(function () { return callback(_this.info != null); });
                return;
            }
            this.loadLevel(this.info.pngUrl.replace("{mipmap}", this.nextLevel.toString()), this.nextLevel, function () {
                --_this.nextLevel;
                callback(_this.nextLevel >= 0);
            });
        };
        ValveTexture2D.prototype.loadInfo = function (callback) {
            var _this = this;
            $.getJSON(this.vtfUrl, function (data) {
                _this.info = data;
                _this.nextLevel = Math.max(0, data.mipmaps - 1);
            }).always(function () {
                if (callback != null)
                    callback();
            });
        };
        ValveTexture2D.prototype.onLoad = function (image, mipLevel, callBack) {
            _super.prototype.onLoad.call(this, image, mipLevel);
            if (this.getLowestMipLevel() === 0 &&
                this.getHighestMipLevel() === this.info.mipmaps - 1) {
                var gl = this.getContext();
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            }
            if (callBack != null)
                callBack();
        };
        return ValveTexture2D;
    }(ValveTexture));
    SourceUtils.ValveTexture2D = ValveTexture2D;
    var ValveTextureCube = (function (_super) {
        __extends(ValveTextureCube, _super);
        function ValveTextureCube(gl, urls) {
            var _this = _super.call(this, gl, gl.TEXTURE_CUBE_MAP) || this;
            _this.infos = [];
            _this.loadedInfo = false;
            _this.nextFace = 0;
            _this.vtfUrls = urls;
            return _this;
        }
        ValveTextureCube.prototype.isLoaded = function () { return _super.prototype.isLoaded.call(this) && this.loadedInfo && this.nextFace >= 6; };
        ValveTextureCube.prototype.loadNext = function (callback) {
            var _this = this;
            _super.prototype.loadNext.call(this, null);
            if (!this.loadedInfo) {
                this.loadInfo(this.nextFace, function (success) { return callback(success); });
                return;
            }
            this.loadLevel(this.infos[this.nextFace].pngUrl.replace("{mipmap}", "0"), this.nextFace, function () {
                ++_this.nextFace;
                callback(_this.nextFace < 6);
            });
        };
        ValveTextureCube.prototype.loadInfo = function (face, callback) {
            var _this = this;
            $.getJSON(this.vtfUrls[face], function (data) {
                _this.infos[face] = data;
                _this.nextFace++;
                if (_this.nextFace >= 6) {
                    _this.nextFace = 0;
                    _this.faceSize = _this.infos[0].width;
                    _this.loadedInfo = true;
                }
                if (callback != null)
                    callback(true);
            }).fail(function () {
                if (callback != null)
                    callback(false);
            });
        };
        ValveTextureCube.prototype.setupTexParams = function (target) {
            var gl = this.getContext();
            gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, this.minFilter);
            gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, this.magFilter);
        };
        ValveTextureCube.prototype.onLoad = function (image, face, callBack) {
            var gl = this.getContext();
            this.getOrCreateHandle();
            var target = gl.TEXTURE_CUBE_MAP_POSITIVE_X + face;
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
            if (image.width === image.height && image.width === this.faceSize) {
                gl.texImage2D(target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            }
            else if (image.height > image.width) {
                console.warn("Cubemap texture has height > width (" + this.infos[face].pngUrl + ").");
            }
            else {
                gl.texImage2D(target, 0, gl.RGBA, this.faceSize, this.faceSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                // Ignore bottom face
                if (face !== 2) {
                    gl.texSubImage2D(target, 0, 0, this.faceSize - image.height, gl.RGBA, gl.UNSIGNED_BYTE, image);
                }
            }
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
            if (callBack != null)
                callBack();
        };
        return ValveTextureCube;
    }(ValveTexture));
    SourceUtils.ValveTextureCube = ValveTextureCube;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var TextureLoader = (function (_super) {
        __extends(TextureLoader, _super);
        function TextureLoader(gl) {
            var _this = _super.call(this) || this;
            _this.context = gl;
            return _this;
        }
        TextureLoader.prototype.onCreateItem = function (url) {
            if (url.indexOf(",") !== -1) {
                return new SourceUtils.ValveTextureCube(this.context, url.split(","));
            }
            return new SourceUtils.ValveTexture2D(this.context, url);
        };
        TextureLoader.prototype.load2D = function (url) {
            return this.load(url);
        };
        TextureLoader.prototype.loadCube = function (urls) {
            if (urls.length !== 6) {
                throw new Error("Expected 6 texture URLs.");
            }
            var joinedUrls = urls.join(",");
            return this.load(joinedUrls);
        };
        return TextureLoader;
    }(SourceUtils.Loader));
    SourceUtils.TextureLoader = TextureLoader;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var VisLeaf = (function (_super) {
        __extends(VisLeaf, _super);
        function VisLeaf(model, info) {
            var _this = _super.call(this, model.map, "l", info.index) || this;
            _this.isLeaf = true;
            var min = info.min;
            var max = info.max;
            _this.parent = model;
            _this.leafIndex = info.index;
            _this.cluster = info.cluster === undefined ? -1 : info.cluster;
            _this.canSeeSky2D = (info.flags & SourceUtils.Api.LeafFlags.Sky2D) !== 0;
            _this.canSeeSky3D = (info.flags & SourceUtils.Api.LeafFlags.Sky) !== 0;
            _this.bounds = new THREE.Box3(new THREE.Vector3(min.x, min.y, min.z), new THREE.Vector3(max.x, max.y, max.z));
            return _this;
        }
        VisLeaf.prototype.getAllLeaves = function (dstArray) {
            dstArray.push(this);
        };
        return VisLeaf;
    }(SourceUtils.BspDrawListItem));
    SourceUtils.VisLeaf = VisLeaf;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var VisNode = (function () {
        function VisNode(model, info) {
            this.isLeaf = false;
            var normal = info.plane.normal;
            var min = info.min;
            var max = info.max;
            this.plane = new THREE.Plane(new THREE.Vector3(normal.x, normal.y, normal.z), info.plane.dist);
            this.bounds = new THREE.Box3(new THREE.Vector3(min
                .x, min.y, min.z), new THREE.Vector3(max.x, max.y, max.z));
            this.children = [
                VisNode.createVisElem(model, info.children[0]),
                VisNode.createVisElem(model, info.children[1])
            ];
        }
        VisNode.createVisElem = function (model, info) {
            if (info.children != undefined) {
                return new VisNode(model, info);
            }
            else {
                return new SourceUtils.VisLeaf(model, info);
            }
        };
        VisNode.prototype.getAllLeaves = function (dstArray) {
            this.children[0].getAllLeaves(dstArray);
            this.children[1].getAllLeaves(dstArray);
        };
        return VisNode;
    }());
    SourceUtils.VisNode = VisNode;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var WorldMeshHandle = (function () {
        function WorldMeshHandle(group, drawMode, material, offset, count) {
            this.group = group;
            this.drawMode = drawMode;
            if (typeof material === "number") {
                this.materialIndex = material;
            }
            else {
                this.material = material;
            }
            this.offset = offset;
            this.count = count;
        }
        WorldMeshHandle.prototype.clone = function (newParent) {
            var copy = new WorldMeshHandle(this.group, this.drawMode, this.material || this.materialIndex, this.offset, this.count);
            copy.parent = newParent;
            return copy;
        };
        WorldMeshHandle.prototype.compareTo = function (other) {
            if (this.parent !== other.parent) {
                return this.parent != null
                    ? this.parent.compareTo(other.parent)
                    : other.parent.compareTo(this.parent);
            }
            var matComp = this.material.compareTo(other.material);
            if (matComp !== 0)
                return matComp;
            var groupComp = this.group.compareTo(other.group);
            if (groupComp !== 0)
                return groupComp;
            return this.offset - other.offset;
        };
        WorldMeshHandle.prototype.canMerge = function (other) {
            return this.materialIndex === other.materialIndex
                && this.material === other.material
                && this.offset + this.count === other.offset
                && this.group === other.group
                && this.parent === other.parent
                && this.drawMode === other.drawMode;
        };
        WorldMeshHandle.prototype.merge = function (other) {
            this.count += other.count;
        };
        return WorldMeshHandle;
    }());
    SourceUtils.WorldMeshHandle = WorldMeshHandle;
    var WorldMeshGroup = (function () {
        function WorldMeshGroup(gl, components) {
            this.vertCount = 0;
            this.indexCount = 0;
            this.hasPositions = false;
            this.hasNormals = false;
            this.hasUvs = false;
            this.hasUv2s = false;
            this.hasAlphas = false;
            this.id = WorldMeshGroup.nextId++;
            this.gl = gl;
            this.vertices = gl.createBuffer();
            this.indices = gl.createBuffer();
            this.components = components;
            this.vertexSize = 0;
            if ((components & SourceUtils.Api.MeshComponent.position) === SourceUtils.Api.MeshComponent.position) {
                this.hasPositions = true;
                this.positionOffset = this.vertexSize;
                this.vertexSize += 3;
            }
            if ((components & SourceUtils.Api.MeshComponent.normal) === SourceUtils.Api.MeshComponent.normal) {
                this.hasNormals = true;
                this.normalOffset = this.vertexSize;
                this.vertexSize += 3;
            }
            if ((components & SourceUtils.Api.MeshComponent.uv) === SourceUtils.Api.MeshComponent.uv) {
                this.hasUvs = true;
                this.uvOffset = this.vertexSize;
                this.vertexSize += 2;
            }
            if ((components & SourceUtils.Api.MeshComponent.uv2) === SourceUtils.Api.MeshComponent.uv2) {
                this.hasUv2s = true;
                this.uv2Offset = this.vertexSize;
                this.vertexSize += 2;
            }
            if ((components & SourceUtils.Api.MeshComponent.alpha) === SourceUtils.Api.MeshComponent.alpha) {
                this.hasAlphas = true;
                this.alphaOffset = this.vertexSize;
                this.vertexSize += 1;
            }
            this.maxVertLength = this.vertexSize * 65536;
        }
        WorldMeshGroup.prototype.compareTo = function (other) {
            return this.id - other.id;
        };
        WorldMeshGroup.prototype.getId = function () { return this.id; };
        WorldMeshGroup.prototype.getVertexCount = function () {
            return this.vertCount / this.vertexSize;
        };
        WorldMeshGroup.prototype.getTriangleCount = function () {
            return this.indexCount / 3;
        };
        WorldMeshGroup.prototype.ensureCapacity = function (array, length, ctor) {
            if (array != null && array.length >= length)
                return array;
            var newLength = 2048;
            while (newLength < length)
                newLength *= 2;
            var newArray = ctor(newLength);
            if (array != null)
                newArray.set(array, 0);
            return newArray;
        };
        WorldMeshGroup.prototype.canAddMeshData = function (data) {
            return this.components === data.components && this.vertCount + data.vertices.length <= this.maxVertLength &&
                this.indexCount + data.indices.length <= WorldMeshGroup.maxIndices;
        };
        WorldMeshGroup.prototype.updateBuffer = function (target, buffer, data, newData, oldData, offset) {
            var gl = this.gl;
            gl.bindBuffer(target, buffer);
            if (data !== oldData) {
                gl.bufferData(target, data.byteLength, gl.STATIC_DRAW);
                gl.bufferSubData(target, 0, data);
            }
            else {
                gl.bufferSubData(target, offset * data.BYTES_PER_ELEMENT, newData);
            }
        };
        WorldMeshGroup.prototype.getDrawMode = function (primitiveType) {
            switch (primitiveType) {
                case SourceUtils.Api.PrimitiveType.TriangleList:
                    return this.gl.TRIANGLES;
                case SourceUtils.Api.PrimitiveType.TriangleStrip:
                    return this.gl.TRIANGLE_STRIP;
                case SourceUtils.Api.PrimitiveType.TriangleFan:
                    return this.gl.TRIANGLE_FAN;
                default:
                    throw new Error("Unknown primitive type '" + primitiveType + "'.");
            }
        };
        WorldMeshGroup.prototype.addMeshData = function (data) {
            if (!this.canAddMeshData(data)) {
                throw new Error("Can't add faces to WorldMeshGroup (would exceed size limit).");
            }
            var gl = this.gl;
            var newVertices = data.vertices;
            var newIndices = data.indices;
            var vertexOffset = this.vertCount;
            var oldVertices = this.vertexData;
            this.vertexData = this.ensureCapacity(this.vertexData, this.vertCount + newVertices.length, function (size) { return new Float32Array(size); });
            var indexOffset = this.indexCount;
            var oldIndices = this.indexData;
            this.indexData = this.ensureCapacity(this.indexData, this.indexCount + newIndices.length, function (size) { return new Uint16Array(size); });
            this.vertexData.set(newVertices, vertexOffset);
            this.vertCount += newVertices.length;
            var elementOffset = Math.round(vertexOffset / this.vertexSize);
            for (var i = 0, iEnd = newIndices.length; i < iEnd; ++i) {
                newIndices[i] += elementOffset;
            }
            this.indexData.set(newIndices, indexOffset);
            this.indexCount += newIndices.length;
            this.updateBuffer(gl.ARRAY_BUFFER, this.vertices, this.vertexData, newVertices, oldVertices, vertexOffset);
            this.updateBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices, this.indexData, newIndices, oldIndices, indexOffset);
            var handles = new Array(data.elements.length);
            for (var i = 0; i < data.elements.length; ++i) {
                var element = data.elements[i];
                handles[i] = new WorldMeshHandle(this, this.getDrawMode(element.type), element.material, element.offset + indexOffset, element.count);
            }
            return handles;
        };
        WorldMeshGroup.prototype.prepareForRendering = function (program) {
            var gl = this.gl;
            var stride = this.vertexSize * 4;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertices);
            program.enableMeshComponents(this.components);
            program.setVertexAttribPointer(SourceUtils.Api.MeshComponent.position, 3, gl.FLOAT, false, stride, this.positionOffset * 4);
            program.setVertexAttribPointer(SourceUtils.Api.MeshComponent.uv, 2, gl.FLOAT, false, stride, this.uvOffset * 4);
            program.setVertexAttribPointer(SourceUtils.Api.MeshComponent.uv2, 2, gl.FLOAT, false, stride, this.uv2Offset * 4);
            program.setVertexAttribPointer(SourceUtils.Api.MeshComponent.alpha, 1, gl.FLOAT, false, stride, this.alphaOffset * 4);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices);
        };
        WorldMeshGroup.prototype.renderElements = function (drawMode, offset, count) {
            var gl = this.gl;
            gl.drawElements(drawMode, count, gl.UNSIGNED_SHORT, offset * 2);
        };
        WorldMeshGroup.prototype.dispose = function () {
            if (this.vertices !== undefined) {
                this.gl.deleteBuffer(this.vertices);
                this.vertices = undefined;
            }
            if (this.indices !== undefined) {
                this.gl.deleteBuffer(this.indices);
                this.indices = undefined;
            }
        };
        return WorldMeshGroup;
    }());
    WorldMeshGroup.maxIndices = 2147483647;
    WorldMeshGroup.nextId = 1;
    SourceUtils.WorldMeshGroup = WorldMeshGroup;
})(SourceUtils || (SourceUtils = {}));
var SourceUtils;
(function (SourceUtils) {
    var WorldMeshManager = (function () {
        function WorldMeshManager(gl) {
            this.groups = [];
            this.gl = gl;
        }
        WorldMeshManager.prototype.getVertexCount = function () {
            var total = 0;
            for (var i = 0; i < this.groups.length; ++i) {
                total += this.groups[i].getVertexCount();
            }
            return total;
        };
        WorldMeshManager.prototype.getTriangleCount = function () {
            var total = 0;
            for (var i = 0; i < this.groups.length; ++i) {
                total += this.groups[i].getTriangleCount();
            }
            return total;
        };
        WorldMeshManager.prototype.addMeshData = function (data) {
            for (var i = 0; i < this.groups.length; ++i) {
                if (this.groups[i].canAddMeshData(data))
                    return this.groups[i].addMeshData(data);
            }
            var newGroup = new SourceUtils.WorldMeshGroup(this.gl, data.components);
            var result = newGroup.addMeshData(data);
            this.groups.push(newGroup);
            return result;
        };
        WorldMeshManager.prototype.dispose = function () {
            for (var i = 0; i < this.groups.length; ++i) {
                this.groups[i].dispose();
            }
            this.groups = [];
        };
        return WorldMeshManager;
    }());
    SourceUtils.WorldMeshManager = WorldMeshManager;
})(SourceUtils || (SourceUtils = {}));
