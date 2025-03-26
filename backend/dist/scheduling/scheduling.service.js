"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulingService = void 0;
const common_1 = require("@nestjs/common");
const prism_service_1 = require("../db/prism.service");
let SchedulingService = class SchedulingService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createSchedulingDto) {
        return this.prismaService.scheduling.create({
            data: createSchedulingDto
        });
    }
    findAll() {
        return this.prismaService.scheduling.findMany();
    }
    findOne(id) {
        return this.prismaService.scheduling.findUnique({
            where: { id }
        });
    }
    update(id, updateSchedulingDto) {
        return this.prismaService.scheduling.update({
            where: { id },
            data: updateSchedulingDto
        });
    }
    remove(id) {
        return this.prismaService.scheduling.delete({
            where: { id }
        });
    }
};
exports.SchedulingService = SchedulingService;
exports.SchedulingService = SchedulingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prism_service_1.PrismService])
], SchedulingService);
//# sourceMappingURL=scheduling.service.js.map