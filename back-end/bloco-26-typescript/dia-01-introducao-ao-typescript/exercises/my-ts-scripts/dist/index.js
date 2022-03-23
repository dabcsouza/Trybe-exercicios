"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const area_js_1 = require("./area.js");
const capacity_js_1 = require("./capacity.js");
const length_js_1 = require("./length.js");
const mass_js_1 = require("./mass.js");
const volume_js_1 = require("./volume.js");
var scriptsOptions;
(function (scriptsOptions) {
    scriptsOptions[scriptsOptions["area"] = 1] = "area";
    scriptsOptions[scriptsOptions["capacity"] = 2] = "capacity";
    scriptsOptions[scriptsOptions["length"] = 3] = "length";
    scriptsOptions[scriptsOptions["mass"] = 4] = "mass";
    scriptsOptions[scriptsOptions["volume"] = 5] = "volume";
})(scriptsOptions || (scriptsOptions = {}));
;
const scripts = {
    area: area_js_1.exec,
    capacity: capacity_js_1.exec,
    length: length_js_1.exec,
    mass: mass_js_1.exec,
    volume: volume_js_1.exec,
};
let exitProgram = 'n';
while (exitProgram.toLocaleLowerCase() !== 's') {
    console.log('Opções: ');
    for (let i = 1; i <= 4; i += 1) {
        console.log(`${i} - ${scriptsOptions[i]}`);
    }
    ;
    const chose = Number(readline_sync_1.default.question('Escolha um script de conversão: '));
    try {
        if (isNaN(chose) || (chose < 0 && chose > 4))
            throw new Error('Opção inválida');
        scripts[scriptsOptions[chose]]();
        exitProgram = readline_sync_1.default.question('Deseja encerrar o Programa s/n ? ');
    }
    catch (e) {
        console.log(e.message);
    }
}
