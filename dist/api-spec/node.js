"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edge = void 0;
const path_1 = __importDefault(require("path"));
class Node {
    constructor(GraphAPI, Edges, id) {
        this.GraphAPI = GraphAPI;
        this.Edges = Edges;
        this.id = id;
        this.read = (access_token, fields, params) => __awaiter(this, void 0, void 0, function* () {
            return yield this.GraphAPI.get(this.id, Object.assign(Object.assign(params !== null && params !== void 0 ? params : {}, { access_token }), {
                fields: fields === null || fields === void 0 ? void 0 : fields.toString(),
            }));
        });
        this.delete = (access_token, params) => __awaiter(this, void 0, void 0, function* () {
            return yield this.GraphAPI.delete(this.id, Object.assign(params !== null && params !== void 0 ? params : {}, { access_token }));
        });
    }
}
exports.default = Node;
class Edge {
    constructor(edge, GraphAPI, id) {
        this.edge = edge;
        this.GraphAPI = GraphAPI;
        this.id = id;
        this.read = (access_token, fields, params) => __awaiter(this, void 0, void 0, function* () {
            return this.GraphAPI.get(path_1.default.join(this.id, this.edge), Object.assign(Object.assign(params !== null && params !== void 0 ? params : {}, { access_token }), {
                fields: fields === null || fields === void 0 ? void 0 : fields.toString(),
            }));
        });
        this.create = (access_token, data, params) => __awaiter(this, void 0, void 0, function* () {
            return this.GraphAPI.post(path_1.default.join(this.id, this.edge), data, Object.assign(params !== null && params !== void 0 ? params : {}, { access_token }));
        });
    }
}
exports.Edge = Edge;
