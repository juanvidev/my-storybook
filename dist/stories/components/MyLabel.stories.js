"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var labelMeta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
    },
};
exports.default = labelMeta;
exports.Basic = {
    args: {
        size: 'normal',
        allCaps: false,
        color: 'primary'
    }
};
exports.AllCaps = {
    args: {
        size: 'normal',
        allCaps: true,
        color: 'primary'
    }
};
exports.Secondary = {
    args: {
        size: 'normal',
        color: 'secondary'
    }
};
exports.Tertiary = {
    args: {
        size: 'normal',
        color: 'tertiary',
    }
};
exports.CustomFontColor = {
    args: {
        size: 'h1',
        fontColor: '#5517ac',
    },
};
