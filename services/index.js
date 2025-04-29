// const Response = require('../models/Response');
import Response from '../models/Response.js';

export function ApiKeyTest(key) {
    return (key == "ironman");
}

export function createOkResponse(payload) {
    return new Response(200, payload, "OK");
}

export function createUnAuthResponse() {
    return new Response(403, undefined, "Não Autorizado");
}

export function createCreatedResponse() {
    return new Response(201, undefined, "Criado");

}

export function createUnProcessableResponse(msg) {
    return new Response(422, undefined, msg);
}