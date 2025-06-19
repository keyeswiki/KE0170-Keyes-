/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block.js":
/*!*****************************!*\
  !*** ./src/blocks/block.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACK: () => (/* binding */ BACK),
/* harmony export */   FRONT: () => (/* binding */ FRONT),
/* harmony export */   LEFT: () => (/* binding */ LEFT),
/* harmony export */   Matrix_16and8_Init_4wd: () => (/* binding */ Matrix_16and8_Init_4wd),
/* harmony export */   OTTO_init: () => (/* binding */ OTTO_init),
/* harmony export */   RIGHT: () => (/* binding */ RIGHT),
/* harmony export */   STOP: () => (/* binding */ STOP),
/* harmony export */   TURN_LEFT: () => (/* binding */ TURN_LEFT),
/* harmony export */   TURN_RIGHT: () => (/* binding */ TURN_RIGHT),
/* harmony export */   Tank_bluetooth: () => (/* binding */ Tank_bluetooth),
/* harmony export */   Tank_ir_r: () => (/* binding */ Tank_ir_r),
/* harmony export */   Tank_light: () => (/* binding */ Tank_light),
/* harmony export */   Tank_matrix: () => (/* binding */ Tank_matrix),
/* harmony export */   Tank_servo2: () => (/* binding */ Tank_servo2),
/* harmony export */   Tank_sr04: () => (/* binding */ Tank_sr04),
/* harmony export */   desk_avoid: () => (/* binding */ desk_avoid),
/* harmony export */   desk_bluetooth: () => (/* binding */ desk_bluetooth),
/* harmony export */   desk_buzzer: () => (/* binding */ desk_buzzer),
/* harmony export */   desk_ir_r: () => (/* binding */ desk_ir_r),
/* harmony export */   desk_led: () => (/* binding */ desk_led),
/* harmony export */   desk_music: () => (/* binding */ desk_music),
/* harmony export */   desk_notone: () => (/* binding */ desk_notone),
/* harmony export */   desk_sr04: () => (/* binding */ desk_sr04),
/* harmony export */   desk_track: () => (/* binding */ desk_track),
/* harmony export */   display_Matrix16and8_DisplayChar_4wd: () => (/* binding */ display_Matrix16and8_DisplayChar_4wd),
/* harmony export */   display_Matrix16and8_LedArray_4wd: () => (/* binding */ display_Matrix16and8_LedArray_4wd),
/* harmony export */   ks4wd_BACK: () => (/* binding */ ks4wd_BACK),
/* harmony export */   ks4wd_FRONT: () => (/* binding */ ks4wd_FRONT),
/* harmony export */   ks4wd_LEFT: () => (/* binding */ ks4wd_LEFT),
/* harmony export */   ks4wd_RIGHT: () => (/* binding */ ks4wd_RIGHT),
/* harmony export */   ks4wd_STOP: () => (/* binding */ ks4wd_STOP),
/* harmony export */   ks4wd_TURN_LEFT: () => (/* binding */ ks4wd_TURN_LEFT),
/* harmony export */   ks4wd_TURN_RIGHT: () => (/* binding */ ks4wd_TURN_RIGHT),
/* harmony export */   ks4wd_bluetooth: () => (/* binding */ ks4wd_bluetooth),
/* harmony export */   ks4wd_ir_r: () => (/* binding */ ks4wd_ir_r),
/* harmony export */   ks4wd_led: () => (/* binding */ ks4wd_led),
/* harmony export */   ks4wd_light: () => (/* binding */ ks4wd_light),
/* harmony export */   ks4wd_matrix: () => (/* binding */ ks4wd_matrix),
/* harmony export */   ks4wd_servo2: () => (/* binding */ ks4wd_servo2),
/* harmony export */   ks4wd_sr04: () => (/* binding */ ks4wd_sr04),
/* harmony export */   ks4wd_track: () => (/* binding */ ks4wd_track),
/* harmony export */   otto_BACK: () => (/* binding */ otto_BACK),
/* harmony export */   otto_FRONT: () => (/* binding */ otto_FRONT),
/* harmony export */   otto_LEFT: () => (/* binding */ otto_LEFT),
/* harmony export */   otto_RIGHT: () => (/* binding */ otto_RIGHT),
/* harmony export */   otto_STOP: () => (/* binding */ otto_STOP),
/* harmony export */   otto_bluetooth: () => (/* binding */ otto_bluetooth),
/* harmony export */   otto_crusaito: () => (/* binding */ otto_crusaito),
/* harmony export */   otto_drunk: () => (/* binding */ otto_drunk),
/* harmony export */   otto_flapping: () => (/* binding */ otto_flapping),
/* harmony export */   otto_goingUp: () => (/* binding */ otto_goingUp),
/* harmony export */   otto_jump: () => (/* binding */ otto_jump),
/* harmony export */   otto_kickLeft: () => (/* binding */ otto_kickLeft),
/* harmony export */   otto_kickright: () => (/* binding */ otto_kickright),
/* harmony export */   otto_moon_LEFT: () => (/* binding */ otto_moon_LEFT),
/* harmony export */   otto_moon_RIGHT: () => (/* binding */ otto_moon_RIGHT),
/* harmony export */   otto_noGravity: () => (/* binding */ otto_noGravity),
/* harmony export */   otto_segunda1: () => (/* binding */ otto_segunda1),
/* harmony export */   otto_servo: () => (/* binding */ otto_servo),
/* harmony export */   otto_sr04: () => (/* binding */ otto_sr04),
/* harmony export */   otto_swing: () => (/* binding */ otto_swing),
/* harmony export */   tank_BACK: () => (/* binding */ tank_BACK),
/* harmony export */   tank_FRONT: () => (/* binding */ tank_FRONT),
/* harmony export */   tank_LEFT: () => (/* binding */ tank_LEFT),
/* harmony export */   tank_Matrix_16and8_Init: () => (/* binding */ tank_Matrix_16and8_Init),
/* harmony export */   tank_RIGHT: () => (/* binding */ tank_RIGHT),
/* harmony export */   tank_STOP: () => (/* binding */ tank_STOP),
/* harmony export */   tank_TURN_LEFT: () => (/* binding */ tank_TURN_LEFT),
/* harmony export */   tank_TURN_RIGHT: () => (/* binding */ tank_TURN_RIGHT),
/* harmony export */   tank_display_Matrix16and8_DisplayChar: () => (/* binding */ tank_display_Matrix16and8_DisplayChar),
/* harmony export */   tank_display_Matrix16and8_LedArray: () => (/* binding */ tank_display_Matrix16and8_LedArray),
/* harmony export */   tank_led: () => (/* binding */ tank_led),
/* harmony export */   tone_notes: () => (/* binding */ tone_notes),
/* harmony export */   turtle_BACK: () => (/* binding */ turtle_BACK),
/* harmony export */   turtle_FRONT: () => (/* binding */ turtle_FRONT),
/* harmony export */   turtle_LEFT: () => (/* binding */ turtle_LEFT),
/* harmony export */   turtle_Matrix_6: () => (/* binding */ turtle_Matrix_6),
/* harmony export */   turtle_Matrix_CLEAR: () => (/* binding */ turtle_Matrix_CLEAR),
/* harmony export */   turtle_RIGHT: () => (/* binding */ turtle_RIGHT),
/* harmony export */   turtle_STOP: () => (/* binding */ turtle_STOP),
/* harmony export */   turtle_TURN_LEFT: () => (/* binding */ turtle_TURN_LEFT),
/* harmony export */   turtle_TURN_RIGHT: () => (/* binding */ turtle_TURN_RIGHT),
/* harmony export */   turtle_avoid: () => (/* binding */ turtle_avoid),
/* harmony export */   turtle_bluetooth: () => (/* binding */ turtle_bluetooth),
/* harmony export */   turtle_buzzer: () => (/* binding */ turtle_buzzer),
/* harmony export */   turtle_ir_r: () => (/* binding */ turtle_ir_r),
/* harmony export */   turtle_led: () => (/* binding */ turtle_led),
/* harmony export */   turtle_matrix1: () => (/* binding */ turtle_matrix1),
/* harmony export */   turtle_matrix2: () => (/* binding */ turtle_matrix2),
/* harmony export */   turtle_matrix_init: () => (/* binding */ turtle_matrix_init),
/* harmony export */   turtle_music: () => (/* binding */ turtle_music),
/* harmony export */   turtle_notone: () => (/* binding */ turtle_notone),
/* harmony export */   turtle_servo: () => (/* binding */ turtle_servo),
/* harmony export */   turtle_servo2: () => (/* binding */ turtle_servo2),
/* harmony export */   turtle_sr04: () => (/* binding */ turtle_sr04),
/* harmony export */   turtle_track: () => (/* binding */ turtle_track)
/* harmony export */ });
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile */ "profile");
/* harmony import */ var profile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(profile__WEBPACK_IMPORTED_MODULE_1__);



// const ALL_HUE = 120;
const CAR_HUE = 200;
const ROBOT_HUE = 250;
const MINI_TANK_ROBOT_HUE = 50;//'#ae3838';//40;
const KEYES_4WD_HUE = 100;
const FROG_HUE = 200;

//////////////////2wdCar///////////////////////////
//////////////////LED////////////////
const desk_led = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField("LED")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_led.png */ "./src/media/desk_led.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_on_off)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_HIGH, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LOW, "LOW"]]), "STAT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


///////////////////////////front////////////////
const FRONT = {
    init: function () {
        this.setColour(CAR_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_forward)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_runing.png */ "./src/media/desk_runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_left);
        this.appendValueInput("speed_F", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_right);
        this.appendValueInput("speed_F2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////back////////////////
const BACK = {
    init: function () {
        this.setColour(CAR_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_backward)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_runing.png */ "./src/media/desk_runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_left);
        this.appendValueInput("speed_B", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_right);
        this.appendValueInput("speed_B2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////left////////////////
const LEFT = {
    init: function () {
        this.setColour(CAR_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_runing.png */ "./src/media/desk_runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_left);
        this.appendValueInput("speed_L", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_right);
        this.appendValueInput("speed_L2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////turn_left////////////////
const TURN_LEFT = {
    init: function () {
        this.setColour(CAR_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_turn_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_runing.png */ "./src/media/desk_runing.png"), 60, 60));

        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////right////////////////
const RIGHT = {
    init: function () {
        this.setColour(CAR_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_runing.png */ "./src/media/desk_runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_left);
        this.appendValueInput("speed_R", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_right);
        this.appendValueInput("speed_R2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////turn_right////////////////
const TURN_RIGHT = {
    init: function () {
        this.setColour(CAR_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_turn_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_runing.png */ "./src/media/desk_runing.png"), 60, 60));

        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


////////////////////////////stop////////////////
const STOP = {
    init: function () {
        this.setColour(CAR_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_stop)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_runing.png */ "./src/media/desk_runing.png"), 60, 60))

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

///////////避障传感器////////////////////
const desk_avoid = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_L_ir_a, "left"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_R_ir_a, "right"]]), 'avoid02');
        this.appendDummyInput("")
            //.appendField("avoid")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_ir_avoid.png */ "./src/media/desk_ir_avoid.png"), 43, 32));
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////////超声波/////////////////////////
const desk_sr04 = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_sr01)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_sr01.png */ "./src/media/desk_sr01.png"), 50, 40));

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    }
};

///////////循迹传感器////////////////////
const desk_track = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_L_track, "track_left"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_C_track, "track_center"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_R_track, "track_right"]]), 'track');
        this.appendDummyInput("")
            //.appendField("track")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_track.png */ "./src/media/desk_track.png"), 60, 60));
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

//////////////////蜂鸣器//////////////////
var TONE_NOTES = [
    ["NOTE_C3", "131"], ["NOTE_D3", "147"], ["NOTE_E3", "165"], ["NOTE_F3", "175"], ["NOTE_G3", "196"], ["NOTE_A3", "220"], ["NOTE_B3", "247"],
    ["NOTE_C4", "262"], ["NOTE_D4", "294"], ["NOTE_E4", "330"], ["NOTE_F4", "349"], ["NOTE_G4", "392"], ["NOTE_A4", "440"], ["NOTE_B4", "494"],
    ["NOTE_C5", "532"], ["NOTE_D5", "587"], ["NOTE_E5", "659"], ["NOTE_F5", "698"], ["NOTE_G5", "784"], ["NOTE_A5", "880"], ["NOTE_B5", "988"]
];


// export const tone_notes = {
//     init: function () {
//         this.setColour(CAR_HUE);
//         this.appendDummyInput("")
//             .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
//         this.setOutput(true, Number);
//     }
// };

const desk_buzzer = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_buzzer)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_buzzer.png */ "./src/media/desk_buzzer.png"), 70, 32));
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_fre);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
    }
};


///////////music////////////////////
const desk_music = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_play_music)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_buzzer.png */ "./src/media/desk_buzzer.png"), 70, 32));
        this.appendDummyInput("")
            //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks_Ode_to_joy, "Ode to Joy"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks_birthday, "Birthday"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks_tetris, "tetris"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks_star_war, "star_war"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks_super_mario, "super_mario"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks_christmas, "christmas"]
            ]), 'play');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

////////////////////关闭蜂鸣器////////////////////////
const desk_notone = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_notone)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_buzzer.png */ "./src/media/desk_buzzer.png"), 70, 32));
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

////////////////红外接收////////////////////////////
//红外接收模块
const desk_ir_r = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('ir_rec'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_ir_R)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_irr.png */ "./src/media/desk_irr.png"), 70, 32));
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
const desk_bluetooth = {
    init: function () {
        this.setColour(CAR_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_Bluetooth)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_bluetooth4.0.png */ "./src/media/desk_bluetooth4.0.png"), 70, 32))
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


///////////////////////Turtle-Car////////////////////////

//////////////////LED////////////////
const turtle_led = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField("LED")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_led.png */ "./src/media/turtle_led.png"), 60, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_on_off)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_high, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_low, "LOW"]]), "STAT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

///////////////////////////front////////////////
const turtle_FRONT = {
    init: function () {
        this.setColour(ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_forward)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_runing.png */ "./src/media/turtle_runing.png"), 70, 70))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_left);
        this.appendValueInput("speed_F", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_right);
        this.appendValueInput("speed_F2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////back////////////////
const turtle_BACK = {
    init: function () {
        this.setColour(ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_backward)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_runing.png */ "./src/media/turtle_runing.png"), 70, 70))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_left);
        this.appendValueInput("speed_B", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_right);
        this.appendValueInput("speed_B2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////left////////////////
const turtle_LEFT = {
    init: function () {
        this.setColour(ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_runing.png */ "./src/media/turtle_runing.png"), 70, 70))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_left);
        this.appendValueInput("speed_L", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_right);
        this.appendValueInput("speed_L2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////turn_left////////////////
const turtle_TURN_LEFT = {
    init: function () {
        this.setColour(ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_turn_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_runing.png */ "./src/media/turtle_runing.png"), 70, 70));

        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////right////////////////
const turtle_RIGHT = {
    init: function () {
        this.setColour(ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_runing.png */ "./src/media/turtle_runing.png"), 70, 70))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_left);
        this.appendValueInput("speed_R", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_right);
        this.appendValueInput("speed_R2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////turn_right////////////////
const turtle_TURN_RIGHT = {
    init: function () {
        this.setColour(ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_turn_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_runing.png */ "./src/media/turtle_runing.png"), 70, 70));

        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


////////////////////////////stop////////////////
const turtle_STOP = {
    init: function () {
        this.setColour(ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_stop)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_runing.png */ "./src/media/turtle_runing.png"), 70, 70))

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

///////////避障传感器////////////////////
const turtle_avoid = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_L_ir_a, "left"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_R_ir_a, "right"]]), 'avoid02');
        this.appendDummyInput("")
            //.appendField("avoid")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_ir_avoid.png */ "./src/media/turtle_ir_avoid.png"), 43, 32));
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////////超声波/////////////////////////
const turtle_sr04 = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_sr01)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_sr01.png */ "./src/media/turtle_sr01.png"), 50, 40));

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    }
};

///////////循迹传感器////////////////////
const turtle_track = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_L_track, "track_left"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_C_track, "track_center"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_R_track, "track_right"]]), 'track');
        this.appendDummyInput("")
            //.appendField("track")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_track.png */ "./src/media/turtle_track.png"), 60, 60));
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

//////////////////蜂鸣器//////////////////
// var TONE_NOTES = [["NOTE_C3", "131"], ["NOTE_D3", "147"], ["NOTE_E3", "165"], ["NOTE_F3", "175"], ["NOTE_G3", "196"], ["NOTE_A3", "220"], ["NOTE_B3", "247"],
// ["NOTE_C4", "262"], ["NOTE_D4", "294"], ["NOTE_E4", "330"], ["NOTE_F4", "349"], ["NOTE_G4", "392"], ["NOTE_A4", "440"], ["NOTE_B4", "494"],
// ["NOTE_C5", "532"], ["NOTE_D5", "587"], ["NOTE_E5", "659"], ["NOTE_F5", "698"], ["NOTE_G5", "784"], ["NOTE_A5", "880"], ["NOTE_B5", "988"]];


const tone_notes = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(TONE_NOTES), 'STAT');
        this.setOutput(true, Number);
    }
};

const turtle_buzzer = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_buzzer)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_buzzer.png */ "./src/media/turtle_buzzer.png"), 70, 32));
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_fre);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
    }
};


///////////music////////////////////
const turtle_music = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_play_music)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_buzzer.png */ "./src/media/turtle_buzzer.png"), 70, 32));
        this.appendDummyInput("")
            //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_Ode_to_joy, "Ode to Joy"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_birthday, "Birthday"]]), 'play');

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

////////////////////关闭蜂鸣器////////////////////////
const turtle_notone = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_notone)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_buzzer.png */ "./src/media/turtle_buzzer.png"), 70, 32));
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};


///////////////////////////舵机///////////////////////////////////
const turtle_servo = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_turtle_SERVO)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_servo.png */ "./src/media/turtle_servo.png"), 70, 60));
        this.appendValueInput("angle", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("0~180");
        this.appendValueInput("time", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY + '(' + blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY_MS + ')');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
    }
};

///////////////////////////舵机///////////////////////////////////
const turtle_servo2 = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_turtle_SERVO)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_servo.png */ "./src/media/turtle_servo.png"), 70, 60));
        this.appendValueInput("angle", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("0~180");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


/////////////////////8*8点阵/////////////////////

const turtle_matrix_init = {
    init: function () {
        this.setColour(ROBOT_HUE)
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_turtle_matrix)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_matrix.png */ "./src/media/turtle_matrix.png"), 80, 80));
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName')
        this.appendValueInput("address", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("address:");
        this.appendValueInput("PIN1").setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField("SDA#");
        this.appendValueInput("PIN2").setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField("SCL#");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //   this.setTooltip("display_点阵屏初始化");
    }
};

//执行器_点阵屏显示_显示图案
const turtle_matrix1 = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOW)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_matrix.png */ "./src/media/turtle_matrix.png"), 80, 80));
        this.appendValueInput("LEDArray")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_PICARRAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip();
    }
};
//执行器_点阵屏显示_图案数组
const turtle_matrix2 = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput("LedArray1"), "VAR");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a81").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a82").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a83").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a84").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a85").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a86").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a87").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a88");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a71").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a72").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a73").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a74").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a75").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a76").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a77").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a78");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a61").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a62").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a63").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a64").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a65").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a66").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a67").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a68");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a51").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a52").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a53").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a54").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a55").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a56").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a57").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a58");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a41").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a42").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a43").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a44").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a45").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a46").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a47").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a48");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a31").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a32").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a33").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a34").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a35").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a36").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a37").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a38");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a21").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a22").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a23").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a24").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a25").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a26").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a27").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a28");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a11").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a12").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a13").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a14").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a15").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a16").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a17").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a18");
        this.setOutput(true, Number);
        //this.setTooltip();
    }
};

///////////6个////////////////////
const turtle_Matrix_6 = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOW)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_matrix.png */ "./src/media/turtle_matrix.png"), 80, 80));
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([["∩_∩", "matrix_smile"], ["♥", "matrix_heart"], ["↑", "matrix_front2"], ["↓", "matrix_back2"], ["←", "matrix_left2"], ["→", "matrix_right2"], ["STOP", "matrix_stop2"]]), 'display');

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        //this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

//执行器_点阵屏显示_清除屏幕
const turtle_Matrix_CLEAR = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOW);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_CLEAR);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        //this.setTooltip();
    }
};

////////////////红外接收////////////////////////////
//红外接收模块
const turtle_ir_r = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('ir_rec'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_ir_R)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_irr.png */ "./src/media/turtle_irr.png"), 70, 32));
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
const turtle_bluetooth = {
    init: function () {
        this.setColour(ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_Bluetooth)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/turtle_bluetooth4.0.png */ "./src/media/turtle_bluetooth4.0.png"), 70, 32))
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.turtle_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


/////////////////////////////////////////////////////////////////
///////////////////Tank-car////////////////////////

//////////////////LED////////////////
const tank_led = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField("LED")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_led.png */ "./src/media/desk_led.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_on_off)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_HIGH, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LOW, "LOW"]]), "STAT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

///////////////////////////front////////////////
const tank_FRONT = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_forward)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/runing.png */ "./src/media/runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_left);
        this.appendValueInput("speed_F", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_right);
        this.appendValueInput("speed_F2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


////////////////////////////back////////////////
const tank_BACK = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_backward)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/runing.png */ "./src/media/runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_left);
        this.appendValueInput("speed_B", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_right);
        this.appendValueInput("speed_B2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////left////////////////
const tank_LEFT = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/runing.png */ "./src/media/runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_left);
        this.appendValueInput("speed_L", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_right);
        this.appendValueInput("speed_L2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////turn_left////////////////
const tank_TURN_LEFT = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_turn_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/runing.png */ "./src/media/runing.png"), 60, 60));

        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////right////////////////
const tank_RIGHT = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/runing.png */ "./src/media/runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_left);
        this.appendValueInput("speed_R", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_right);
        this.appendValueInput("speed_R2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////turn_right////////////////
const tank_TURN_RIGHT = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_turn_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/runing.png */ "./src/media/runing.png"), 60, 60));

        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


////////////////////////////stop////////////////
const tank_STOP = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_stop)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/runing.png */ "./src/media/runing.png"), 60, 60))

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};



///////////////超声波/////////////////////////
const Tank_sr04 = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_sr01)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/sr01.png */ "./src/media/sr01.png"), 50, 40));

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    }
};





///////////////////////////舵机///////////////////////////////////
const Tank_servo2 = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Tank_SERVO)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/servo.png */ "./src/media/servo.png"), 70, 60));
        this.appendValueInput("angle", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("0~180");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

//////////////////tank_matrix////////////////
//////////////////////////////////////16 * 8 点阵//////////////////////////////////
const tank_Matrix_16and8_Init = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.matrix16and8_init)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/tank_matrix.png */ "./src/media/tank_matrix.png"), 100, 60));
        //this.appendDummyInput("")
        //.appendField(Blockly.Msg.MIXLY_MATRIX_NAME);
        //.appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
        this.appendDummyInput("")
            // .appendField(Blockly.Msg.MIXLY_4DIGITDISPLAY_TM1637_INIT)
            .appendField('SCL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "SCL")
            .appendField('SDA')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "SDA");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_INIT);
        this.setFieldValue("SCL", "SCL");
        this.setFieldValue("SDA", "SDA");

    }
};

//点阵屏显示_显示图案
const tank_display_Matrix16and8_DisplayChar = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.matrix16and8)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/tank_matrix.png */ "./src/media/tank_matrix.png"), 100, 60));
        //.appendField(new Blockly.FieldDropdown([['HT16K33', 'HT16K33'], ['MAX7219', 'MAX7219']]), 'TYPE');
        //this.appendDummyInput("")
        // .appendField(Blockly.Msg.MIXLY_MATRIX_NAME);
        //.appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
        //this.appendValueInput("NO")
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.Msg.MIXLY_MAX7219_NO);
        this.appendValueInput("LEDArray")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_PICARRAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_DISPLAYCHAR);
    }
};

const tank_display_Matrix16and8_LedArray = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput("LedArray1"), "VAR");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a11")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a21")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a31")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a41")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a51")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a61")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a71")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a81")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a91")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a101")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a111")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a121")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a131")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a141")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a151")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a161");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a12")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a22")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a32")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a42")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a52")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a62")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a72")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a82")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a92")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a102")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a112")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a122")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a132")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a142")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a152")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a162");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a13")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a23")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a33")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a43")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a53")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a63")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a73")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a83")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a93")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a103")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a113")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a123")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a133")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a143")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a153")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a163");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a14")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a24")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a34")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a44")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a54")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a64")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a74")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a84")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a94")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a104")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a114")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a124")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a134")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a144")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a154")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a164");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a15")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a25")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a35")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a45")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a55")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a65")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a75")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a85")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a95")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a105")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a115")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a125")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a135")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a145")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a155")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a165");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a16")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a26")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a36")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a46")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a56")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a66")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a76")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a86")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a96")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a106")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a116")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a126")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a136")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a146")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a156")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a166");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a17")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a27")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a37")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a47")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a57")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a67")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a77")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a87")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a97")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a107")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a117")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a127")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a137")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a147")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a157")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a167");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a18")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a28")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a38")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a48")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a58")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a68")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a78")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a88")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a98")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a108")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a118")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a128")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a138")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a148")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a158")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a168");
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
    }
};
//tank_Matrix16and8_image
const Tank_matrix = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.matrix16and8_image)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/tank_matrix.png */ "./src/media/tank_matrix.png"), 100, 60));
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_choose)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                ["↑", "front"],
                ["↓", "back"],
                ["←", "left"],
                ["→", "right"],
                ["STOP", "STOP01"],
                ["V", "start01"],
                ["♥", "heart_full"],
                ["▲", "triangle_full"],
                ["▼", "triangle_back"],
                ["∩_∩", "smile"],
                ["￣へ￣", "sad"],
                ["clear", "clear"],
            ]), "matrix");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};



///////////光线传感器///////////////
const Tank_light = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.left_light_sensor, "left_light"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.right_light_sensor, "right_light"]]), "light")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/light.png */ "./src/media/light.png"), 60, 32));
        //.appendField("tank_light");
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};


////////////////红外接收////////////////////////////
//红外接收模块
const Tank_ir_r = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('ir_rec'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_ir_R)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/irr.png */ "./src/media/irr.png"), 70, 32));
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
const Tank_bluetooth = {
    init: function () {
        this.setColour(MINI_TANK_ROBOT_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_Bluetooth)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/bluetooth4.0.png */ "./src/media/bluetooth4.0.png"), 70, 32))
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


////////////////////////////////////////////////////////////////////////
///////////////////////////////4wd-Car////////////////////////////////

//////////////////LED////////////////
const ks4wd_led = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField("LED")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/desk_led.png */ "./src/media/desk_led.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Desk_on_off)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_HIGH, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LOW, "LOW"]]), "STAT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

///////////////////////////front////////////////
const ks4wd_FRONT = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);

        this.appendDummyInput("")
            //.appendField(Blockly.Msg.ks4wd_front)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_forward)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/4wd_runing.png */ "./src/media/4wd_runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_left);
        this.appendValueInput("speed_F", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_right);
        this.appendValueInput("speed_F2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////back////////////////
const ks4wd_BACK = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);

        this.appendDummyInput("")
            //.appendField(Blockly.Msg.ks4wd_back)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_backward)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/4wd_runing.png */ "./src/media/4wd_runing.png"), 60, 60))
            //.appendField(Blockly.Msg.ks4wd_speed);
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_left);
        this.appendValueInput("speed_B", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_right);
        this.appendValueInput("speed_B2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////left////////////////
const ks4wd_LEFT = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);

        this.appendDummyInput("")
            //.appendField(Blockly.Msg.ks4wd_left)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/4wd_runing.png */ "./src/media/4wd_runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_left);
        this.appendValueInput("speed_L", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_right);
        this.appendValueInput("speed_L2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////turn_left////////////////
const ks4wd_TURN_LEFT = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_turn_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/4wd_runing.png */ "./src/media/4wd_runing.png"), 60, 60));

        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////right////////////////
const ks4wd_RIGHT = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);

        this.appendDummyInput("")
            //.appendField(Blockly.Msg.ks4wd_right)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ksCar_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/4wd_runing.png */ "./src/media/4wd_runing.png"), 60, 60))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_left);
        this.appendValueInput("speed_R", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_right);
        this.appendValueInput("speed_R2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////turn_right////////////////
const ks4wd_TURN_RIGHT = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_turn_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/4wd_runing.png */ "./src/media/4wd_runing.png"), 60, 60));

        this.appendDummyInput("")
            .appendField("PWM");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


////////////////////////////stop////////////////
const ks4wd_STOP = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_stop)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/4wd_runing.png */ "./src/media/4wd_runing.png"), 60, 60))

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};



///////////////超声波/////////////////////////
const ks4wd_sr04 = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_sr01)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/sr01.png */ "./src/media/sr01.png"), 50, 40));

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    }
};





///////////////////////////舵机///////////////////////////////////
const ks4wd_servo2 = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ks4wd_SERVO)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/servo.png */ "./src/media/servo.png"), 70, 60));
        this.appendValueInput("angle", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("0~180");

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

//////////////////ks4wd_matrix////////////////
//////////////////////////////////////16 * 8 点阵//////////////////////////////////
const Matrix_16and8_Init_4wd = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.matrix16and8_init)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/tank_matrix.png */ "./src/media/tank_matrix.png"), 100, 60));
        //this.appendDummyInput("")
        //.appendField(Blockly.Msg.MIXLY_MATRIX_NAME);
        //.appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
        this.appendDummyInput("")
            // .appendField(Blockly.Msg.MIXLY_4DIGITDISPLAY_TM1637_INIT)
            .appendField('SCL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "SCL")
            .appendField('SDA')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "SDA");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_INIT);
        this.setFieldValue("SCL", "SCL");
        this.setFieldValue("SDA", "SDA");

    }
};

//点阵屏显示_显示图案
const display_Matrix16and8_DisplayChar_4wd = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.matrix16and8)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/tank_matrix.png */ "./src/media/tank_matrix.png"), 100, 60));
        //.appendField(new Blockly.FieldDropdown([['HT16K33', 'HT16K33'], ['MAX7219', 'MAX7219']]), 'TYPE');
        //this.appendDummyInput("")
        // .appendField(Blockly.Msg.MIXLY_MATRIX_NAME);
        //.appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
        //this.appendValueInput("NO")
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.Msg.MIXLY_MAX7219_NO);
        this.appendValueInput("LEDArray")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_PICARRAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_DISPLAYCHAR);
    }
};

const display_Matrix16and8_LedArray_4wd = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput("LedArray1"), "VAR");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a11")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a21")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a31")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a41")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a51")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a61")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a71")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a81")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a91")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a101")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a111")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a121")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a131")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a141")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a151")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a161");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a12")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a22")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a32")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a42")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a52")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a62")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a72")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a82")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a92")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a102")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a112")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a122")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a132")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a142")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a152")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a162");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a13")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a23")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a33")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a43")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a53")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a63")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a73")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a83")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a93")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a103")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a113")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a123")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a133")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a143")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a153")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a163");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a14")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a24")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a34")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a44")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a54")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a64")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a74")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a84")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a94")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a104")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a114")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a124")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a134")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a144")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a154")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a164");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a15")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a25")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a35")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a45")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a55")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a65")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a75")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a85")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a95")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a105")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a115")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a125")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a135")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a145")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a155")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a165");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a16")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a26")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a36")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a46")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a56")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a66")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a76")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a86")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a96")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a106")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a116")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a126")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a136")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a146")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a156")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a166");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a17")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a27")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a37")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a47")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a57")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a67")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a77")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a87")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a97")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a107")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a117")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a127")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a137")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a147")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a157")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a167");
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a18")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a28")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a38")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a48")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a58")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a68")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a78")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a88")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a98")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a108")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a118")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a128")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a138")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a148")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a158")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a168");
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
    }
};
//Matrix16and8_image_4wd
const ks4wd_matrix = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.matrix16and8_image)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/tank_matrix.png */ "./src/media/tank_matrix.png"), 100, 60));
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.tank_choose)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                ["↑", "front"],
                ["↓", "back"],
                ["←", "left"],
                ["→", "right"],
                ["STOP", "STOP01"],
                ["V", "start01"],
                ["♥", "heart_full"],
                ["▲", "triangle_full"],
                ["▼", "triangle_back"],
                ["∩_∩", "smile"],
                ["￣へ￣", "sad"],
                ["clear", "clear"],
            ]), "matrix");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

///////////循迹传感器////////////////////
const ks4wd_track = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_L_track, "track_left"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_C_track, "track_center"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_R_track, "track_right"]]), 'track');
        this.appendDummyInput("")
            //.appendField("track")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/track.png */ "./src/media/track.png"), 60, 60));
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};



///////////光线传感器///////////////
const ks4wd_light = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([["left_light_sensor", "left_light"], ["right_light_sensor", "right_light"]]), "light")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/light.png */ "./src/media/light.png"), 60, 32));

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};


////////////////红外接收////////////////////////////
//红外接收模块
const ks4wd_ir_r = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('ir_rec'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_ir_R)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/irr.png */ "./src/media/irr.png"), 70, 32));
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
const ks4wd_bluetooth = {
    init: function () {
        this.setColour(KEYES_4WD_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_Bluetooth)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/bluetooth4.0.png */ "./src/media/bluetooth4.0.png"), 70, 32))
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ks4wd_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


////////////////////////////////////////////////////////////
///////////////////////////Frog-robot////////////////////

///////////////////////////OTTO_init////////////////
const OTTO_init = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_init)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/otto_frog.png */ "./src/media/otto_frog.png"), 60, 80));
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_YL);
        this.appendValueInput("YL", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_YR);
        this.appendValueInput("YR", Number)
            .setCheck(Number);


        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_RL);
        this.appendValueInput("RL", Number)
            .setCheck(Number);


        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_RR);
        this.appendValueInput("RR", Number)
            .setCheck(Number);


        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};





///////////////////////////front////////////////
const otto_FRONT = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_front);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////back////////////////
const otto_BACK = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_back);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////left////////////////
const otto_LEFT = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_turn_left);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


////////////////////////////right////////////////
const otto_RIGHT = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_turn_right);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


////////////////////////////stop////////////////
const otto_STOP = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_stop);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32))

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////moon_left////////////////
const otto_moon_LEFT = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_left_moonwalk);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////right////////////////
const otto_moon_RIGHT = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_right_moonwalk);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////kickLeft////////////////
const otto_kickLeft = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_left_galop);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32))

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////kickright////////////////
const otto_kickright = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_right_galop);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32))

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////otto_drunk///////////////
const otto_drunk = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_drunk);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////noGravity////////////////
const otto_noGravity = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_noGravity);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32))

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////crusaito////////////////
const otto_crusaito = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_crusaito);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////segunda1////////////////
const otto_segunda1 = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_friction_pace);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////jump////////////////
const otto_jump = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_jump);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////flapping////////////////
const otto_flapping = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_flapping);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////swing////////////////
const otto_swing = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_swing);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_steps);
        this.appendValueInput("steps", Number)
            .setCheck(Number);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////swing////////////////
const otto_goingUp = {
    init: function () {
        this.setColour(FROG_HUE);

        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_goingUp);
        //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32));


        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_speed);
        this.appendValueInput("speed1", Number)
            .setCheck(Number);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

////////////////////////////dance////////////////
/*export const otto_dance = {
  init: function() {
    this.setColour(FROG_HUE);

    this.appendDummyInput("")
    .appendField("dance");
    //.appendField(new Blockly.FieldImage(require("../media/runing.png"), 43, 32))

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};*/

///////////////////////////舵机///////////////////////////////////
const otto_servo = {
    init: function () {
        this.setColour(FROG_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_servo)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput("angle", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_angle);
        this.appendValueInput("time", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY + '(' + blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY_MS + ')');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
    }
};



///////////////超声波/////////////////////////
const otto_sr04 = {
    init: function () {
        this.setColour(FROG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_sr01)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/otto_sr01.png */ "./src/media/otto_sr01.png"), 50, 40));

        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    }
};



//////////////////////蓝牙////////////////////////////
const otto_bluetooth = {
    init: function () {
        this.setColour(FROG_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_Bluetooth)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/otto_bluetooth4.0.png */ "./src/media/otto_bluetooth4.0.png"), 70, 32))
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.otto_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};

/***/ }),

/***/ "./src/generators/generator.js":
/*!*************************************!*\
  !*** ./src/generators/generator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACK: () => (/* binding */ BACK),
/* harmony export */   Desktop_Car: () => (/* binding */ Desktop_Car),
/* harmony export */   FRONT: () => (/* binding */ FRONT),
/* harmony export */   LEFT: () => (/* binding */ LEFT),
/* harmony export */   Matrix_16and8_Init_4wd: () => (/* binding */ Matrix_16and8_Init_4wd),
/* harmony export */   OTTO_init: () => (/* binding */ OTTO_init),
/* harmony export */   RIGHT: () => (/* binding */ RIGHT),
/* harmony export */   STOP: () => (/* binding */ STOP),
/* harmony export */   TURN_LEFT: () => (/* binding */ TURN_LEFT),
/* harmony export */   TURN_RIGHT: () => (/* binding */ TURN_RIGHT),
/* harmony export */   Tank_bluetooth: () => (/* binding */ Tank_bluetooth),
/* harmony export */   Tank_ir_r: () => (/* binding */ Tank_ir_r),
/* harmony export */   Tank_light: () => (/* binding */ Tank_light),
/* harmony export */   Tank_matrix: () => (/* binding */ Tank_matrix),
/* harmony export */   Tank_servo2: () => (/* binding */ Tank_servo2),
/* harmony export */   Tank_sr04: () => (/* binding */ Tank_sr04),
/* harmony export */   desk_avoid: () => (/* binding */ desk_avoid),
/* harmony export */   desk_bluetooth: () => (/* binding */ desk_bluetooth),
/* harmony export */   desk_buzzer: () => (/* binding */ desk_buzzer),
/* harmony export */   desk_ir_r: () => (/* binding */ desk_ir_r),
/* harmony export */   desk_led: () => (/* binding */ desk_led),
/* harmony export */   desk_music: () => (/* binding */ desk_music),
/* harmony export */   desk_notone: () => (/* binding */ desk_notone),
/* harmony export */   desk_sr04: () => (/* binding */ desk_sr04),
/* harmony export */   desk_track: () => (/* binding */ desk_track),
/* harmony export */   display_Matrix16and8_DisplayChar_4wd: () => (/* binding */ display_Matrix16and8_DisplayChar_4wd),
/* harmony export */   display_Matrix16and8_LedArray_4wd: () => (/* binding */ display_Matrix16and8_LedArray_4wd),
/* harmony export */   ks4wd_BACK: () => (/* binding */ ks4wd_BACK),
/* harmony export */   ks4wd_FRONT: () => (/* binding */ ks4wd_FRONT),
/* harmony export */   ks4wd_LEFT: () => (/* binding */ ks4wd_LEFT),
/* harmony export */   ks4wd_RIGHT: () => (/* binding */ ks4wd_RIGHT),
/* harmony export */   ks4wd_STOP: () => (/* binding */ ks4wd_STOP),
/* harmony export */   ks4wd_TURN_LEFT: () => (/* binding */ ks4wd_TURN_LEFT),
/* harmony export */   ks4wd_TURN_RIGHT: () => (/* binding */ ks4wd_TURN_RIGHT),
/* harmony export */   ks4wd_bluetooth: () => (/* binding */ ks4wd_bluetooth),
/* harmony export */   ks4wd_ir_r: () => (/* binding */ ks4wd_ir_r),
/* harmony export */   ks4wd_led: () => (/* binding */ ks4wd_led),
/* harmony export */   ks4wd_matrix: () => (/* binding */ ks4wd_matrix),
/* harmony export */   ks4wd_servo2: () => (/* binding */ ks4wd_servo2),
/* harmony export */   ks4wd_sr04: () => (/* binding */ ks4wd_sr04),
/* harmony export */   ks4wd_track: () => (/* binding */ ks4wd_track),
/* harmony export */   otto_BACK: () => (/* binding */ otto_BACK),
/* harmony export */   otto_FRONT: () => (/* binding */ otto_FRONT),
/* harmony export */   otto_LEFT: () => (/* binding */ otto_LEFT),
/* harmony export */   otto_RIGHT: () => (/* binding */ otto_RIGHT),
/* harmony export */   otto_STOP: () => (/* binding */ otto_STOP),
/* harmony export */   otto_bluetooth: () => (/* binding */ otto_bluetooth),
/* harmony export */   otto_crusaito: () => (/* binding */ otto_crusaito),
/* harmony export */   otto_drunk: () => (/* binding */ otto_drunk),
/* harmony export */   otto_flapping: () => (/* binding */ otto_flapping),
/* harmony export */   otto_goingUp: () => (/* binding */ otto_goingUp),
/* harmony export */   otto_jump: () => (/* binding */ otto_jump),
/* harmony export */   otto_kickLeft: () => (/* binding */ otto_kickLeft),
/* harmony export */   otto_kickright: () => (/* binding */ otto_kickright),
/* harmony export */   otto_moon_LEFT: () => (/* binding */ otto_moon_LEFT),
/* harmony export */   otto_moon_RIGHT: () => (/* binding */ otto_moon_RIGHT),
/* harmony export */   otto_noGravity: () => (/* binding */ otto_noGravity),
/* harmony export */   otto_segunda1: () => (/* binding */ otto_segunda1),
/* harmony export */   otto_servo: () => (/* binding */ otto_servo),
/* harmony export */   otto_sr04: () => (/* binding */ otto_sr04),
/* harmony export */   otto_swing: () => (/* binding */ otto_swing),
/* harmony export */   tank_BACK: () => (/* binding */ tank_BACK),
/* harmony export */   tank_FRONT: () => (/* binding */ tank_FRONT),
/* harmony export */   tank_LEFT: () => (/* binding */ tank_LEFT),
/* harmony export */   tank_Matrix_16and8_Init: () => (/* binding */ tank_Matrix_16and8_Init),
/* harmony export */   tank_RIGHT: () => (/* binding */ tank_RIGHT),
/* harmony export */   tank_STOP: () => (/* binding */ tank_STOP),
/* harmony export */   tank_TURN_LEFT: () => (/* binding */ tank_TURN_LEFT),
/* harmony export */   tank_TURN_RIGHT: () => (/* binding */ tank_TURN_RIGHT),
/* harmony export */   tank_display_Matrix16and8_DisplayChar: () => (/* binding */ tank_display_Matrix16and8_DisplayChar),
/* harmony export */   tank_display_Matrix16and8_LedArray: () => (/* binding */ tank_display_Matrix16and8_LedArray),
/* harmony export */   tank_led: () => (/* binding */ tank_led),
/* harmony export */   tone_notes: () => (/* binding */ tone_notes),
/* harmony export */   turtle_BACK: () => (/* binding */ turtle_BACK),
/* harmony export */   turtle_FRONT: () => (/* binding */ turtle_FRONT),
/* harmony export */   turtle_LEFT: () => (/* binding */ turtle_LEFT),
/* harmony export */   turtle_Matrix_6: () => (/* binding */ turtle_Matrix_6),
/* harmony export */   turtle_Matrix_CLEAR: () => (/* binding */ turtle_Matrix_CLEAR),
/* harmony export */   turtle_RIGHT: () => (/* binding */ turtle_RIGHT),
/* harmony export */   turtle_STOP: () => (/* binding */ turtle_STOP),
/* harmony export */   turtle_TURN_LEFT: () => (/* binding */ turtle_TURN_LEFT),
/* harmony export */   turtle_TURN_RIGHT: () => (/* binding */ turtle_TURN_RIGHT),
/* harmony export */   turtle_bluetooth: () => (/* binding */ turtle_bluetooth),
/* harmony export */   turtle_ir_r: () => (/* binding */ turtle_ir_r),
/* harmony export */   turtle_led: () => (/* binding */ turtle_led),
/* harmony export */   turtle_matrix1: () => (/* binding */ turtle_matrix1),
/* harmony export */   turtle_matrix2: () => (/* binding */ turtle_matrix2),
/* harmony export */   turtle_matrix_init: () => (/* binding */ turtle_matrix_init),
/* harmony export */   turtle_servo2: () => (/* binding */ turtle_servo2),
/* harmony export */   turtle_servo_bak: () => (/* binding */ turtle_servo_bak),
/* harmony export */   turtle_sr04: () => (/* binding */ turtle_sr04),
/* harmony export */   turtle_track: () => (/* binding */ turtle_track)
/* harmony export */ });
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);



//////////////////////////////////2WD-Car////////////////////////////////////////////

/////////////////////////led///////////////////////
const desk_led = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_led'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return code;
};


////////////////////////////////Desktop_Car//////////////////////////
const Desktop_Car = function (_, generator) {

    var value_speed = generator.valueToCode(this, 'speed', generator.ORDER_ATOMIC) || '0';
    //var speed = generator.valueToCode(this, 'speed', generator.ORDER_ATOMIC) || '0';
    var dropdown_type = this.getFieldValue('direction');

    generator.definitions_['1front'] = 'void front() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,' + value_speed + ');\n  digitalWrite(2,HIGH);\n  analogWrite(9,' + value_speed + ');\n}\n';
    generator.definitions_['2back'] = 'void back() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,' + value_speed + ');\n  digitalWrite(2,HIGH);\n  analogWrite(9,' + value_speed + ');\n}\n';

    var code = '';
    if (dropdown_type == "front") code += 'front();';
    if (dropdown_type == "back") code += 'back();';
    if (dropdown_type == "left") code += 'left();';
    if (dropdown_type == "right") code += 'right();';

    //generator.setups_['setup_front_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    //var code = '  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_front+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_front+');';
    return code;
};

////////////////////////////////front//////////////////////////
const FRONT = function (_, generator) {

    var value_front = generator.valueToCode(this, 'speed_F', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_front + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_front + ');\n';
    return code;
};

////////////////////////////////back//////////////////////////
const BACK = function (_, generator) {

    var value_back = generator.valueToCode(this, 'speed_B', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_back + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_back + ');\n';
    return code;
};

////////////////////////////////left//////////////////////////
const LEFT = function (_, generator) {

    var value_left = generator.valueToCode(this, 'speed_L', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_left + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_left + ');\n';
    return code;
};

////////////////////////////////turn_left//////////////////////////
const TURN_LEFT = function (_, generator) {
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,100);\ndigitalWrite(2,HIGH);\nanalogWrite(6,180);\n';
    return code;
};


////////////////////////////////right//////////////////////////
const RIGHT = function (_, generator) {

    var value_right = generator.valueToCode(this, 'speed_R', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_right + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_right + ');\n';
    return code;
};

////////////////////////////////turn_right//////////////////////////
const TURN_RIGHT = function (_, generator) {

    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,180);\ndigitalWrite(2,HIGH);\nanalogWrite(6,100);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
const STOP = function (_, generator) {
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n';
    return code;
};

//////////////////////////红外避障///////////////////////////
const desk_avoid = function (_, generator) {
    var dropdown_type = this.getFieldValue('avoid02');
    generator.setups_['setup_output_left'] = 'pinMode(A1, INPUT);';
    generator.setups_['setup_output_right'] = 'pinMode(A2, INPUT);';

    var code = '';
    if (dropdown_type == "left") code += 'digitalRead(A1)';
    if (dropdown_type == "right") code += 'digitalRead(A2)';
    return [code, generator.ORDER_ATOMIC];
};

///////////////////////desk超声波//////////////////////
const desk_sr04 = function (_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(12, LOW);\n'
        + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
const desk_track = function (_, generator) {
    var dropdown_type = this.getFieldValue('track');
    generator.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
    generator.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
    generator.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

    var code = '';
    if (dropdown_type == "track_left") code += 'digitalRead(11)';
    if (dropdown_type == "track_center") code += 'digitalRead(7)';
    if (dropdown_type == "track_right") code += 'digitalRead(8)';
    return [code, generator.ORDER_ATOMIC];
};

////////////////////蜂鸣器//////////////////////
const tone_notes = function (_, generator) {
    var code = this.getFieldValue('STAT');
    return [code, generator.ORDER_ATOMIC];
};

const desk_buzzer = function (_, generator) {
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    generator.setups_['setup_output_3'] = 'pinMode(3, OUTPUT);';
    var code = "";
    /*if(window.isNaN(dropdown_pin)){
       code = code+'pinMode(11, OUTPUT);\n';
    }else{
       generator.setups_['setup_output_11'] = 'pinMode(11, OUTPUT);';
    }*/
    code += "tone(3," + fre + ");\n";
    return code;
};

//////////////////////////music///////////////////////////
const desk_music = function (_, generator) {

    generator.definitions_['1include_music'] = '#include<music.h>';
    //generator.definitions_['2include_buzzer_pin'] = 'int buzzer_pin = '+dropdown_pin+';';
    generator.definitions_['2include_buzzer_pin'] = 'int buzzer_pin = 3;';
    generator.definitions_['3include_music2'] = 'music Music(buzzer_pin);';

    generator.setups_['setup_output_music_pin'] = 'pinMode(buzzer_pin, OUTPUT);';

    var dropdown_type = this.getFieldValue('play');
    var code = '';
    if (dropdown_type == "Birthday") code += 'Music.birthday();\n';
    if (dropdown_type == "Ode to Joy") code += 'Music.Ode_to_Joy();\n';
    if (dropdown_type == "tetris") code += 'Music.tetris();';
    if (dropdown_type == "star_war") code += 'Music.star_war_tone();';
    if (dropdown_type == "super_mario") code += 'Music.super_mario();';
    if (dropdown_type == "christmas") code += 'Music.christmas();';
    return code;
    //return [code, generator.ORDER_ATOMIC];
};

const desk_notone = function (_, generator) {
    //var dropdown_pin = generator.valueToCode(this, 'PIN',generator.ORDER_ATOMIC);
    generator.setups_['setup_output'] = 'pinMode(3, OUTPUT);';
    var code = '';
    code += "noTone(3);\n";
    return code;
};

//////////////////music/////////////////////////



///////////////////////红外接收///////////////////
const desk_ir_r = function (_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), blockly_core__WEBPACK_IMPORTED_MODULE_0__.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var branch = generator.statementToCode(this, 'DO');
    var branch2 = generator.statementToCode(this, 'DO2');
    generator.definitions_['1include_IRremote'] = '#include <IRremote.h>\n';
    //generator.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    generator.definitions_['2var_ir_recv_A3'] = 'IRrecv irrecv(A3);\ndecode_results results;\n';
    generator.setups_['setup_ir_recv_A3'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
const desk_bluetooth = function (_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    //var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    //var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);


    //generator.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
    //generator.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
    generator.definitions_['1char'] = 'char ' + val + ';\n';

    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

///////////////////////////////Desktop_Car/////////////////////////////////////////////////



///////////////////////////////4WD_Car/////////////////////////////////////////////////
/////////////////////////led///////////////////////
const ks4wd_led = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_led'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return code;
};

////////////////////////////////front//////////////////////////
const ks4wd_FRONT = function (_, generator) {

    var value_front = generator.valueToCode(this, 'speed_F', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,20+' + value_front + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_front + ');\n';
    return code;
};

////////////////////////////////back//////////////////////////
const ks4wd_BACK = function (_, generator) {

    var value_back = generator.valueToCode(this, 'speed_B', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,20+' + value_back + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_back + ');\n';
    return code;
};

////////////////////////////////left//////////////////////////
const ks4wd_LEFT = function (_, generator) {

    var value_left = generator.valueToCode(this, 'speed_L', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,20+' + value_left + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_left + ');\n';
    return code;
};

////////////////////////////////turn_left//////////////////////////
const ks4wd_TURN_LEFT = function (_, generator) {
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,150);\ndigitalWrite(2,HIGH);\nanalogWrite(6,255);\n';
    return code;
};


////////////////////////////////right//////////////////////////
const ks4wd_RIGHT = function (_, generator) {

    var value_right = generator.valueToCode(this, 'speed_R', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,20+' + value_right + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_right + ');\n';
    return code;
};

////////////////////////////////turn_right//////////////////////////
const ks4wd_TURN_RIGHT = function (_, generator) {

    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,255);\ndigitalWrite(2,HIGH);\nanalogWrite(6,150);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
const ks4wd_STOP = function (_, generator) {
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n';
    return code;
};



///////////////////////Tank超声波//////////////////////
const ks4wd_sr04 = function (_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(12, LOW);\n'
        + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};


//////////////////////////循迹模块///////////////////////////
const ks4wd_track = function (_, generator) {
    var dropdown_type = this.getFieldValue('track');
    generator.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
    generator.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
    generator.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

    var code = '';
    if (dropdown_type == "track_left") code += 'digitalRead(11)';
    if (dropdown_type == "track_center") code += 'digitalRead(7)';
    if (dropdown_type == "track_right") code += 'digitalRead(8)';
    return [code, generator.ORDER_ATOMIC];
};




///////////////////////////////舵机2/////////////////////////
const ks4wd_servo2 = function (_, generator) {

    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    //delay_time = delay_time.replace('(','').replace(')','');

    generator.definitions_['1include_Servo'] = '#include <Servo.h>';
    generator.definitions_['2var_servo'] = 'Servo servo_10;';
    generator.setups_['setup_servo'] = 'servo_10.attach(10);';

    var code = 'servo_10.write(' + value_degree + ');\n';
    return code;
};

////////////////////////////////ks4wd_Matrix//////////////////////////
///////////////////////16*8点阵/////////////////////////////
//初始化
const Matrix_16and8_Init_4wd = function (_, generator) {
    var SDA = this.getFieldValue('SDA');
    var SCL = this.getFieldValue('SCL');
    generator.definitions_['1iic_scl'] = '#define IIC_SCL  ' + SCL + '\n';
    generator.definitions_['1iic_sda'] = '#define IIC_SDA  ' + SDA + '\n';
    generator.definitions_['1line'] = 'unsigned char data_line = 0;\n';
    generator.definitions_['1count01'] = 'unsigned char delay_count = 0;\n';
    generator.definitions_['3iic_start'] = 'void IIC_start()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);}\n';
    generator.definitions_['4iic_send'] = 'void IIC_send(unsigned char send_data)\n{\n  for(char i = 0;i < 8;i++)\n  {\n      digitalWrite(IIC_SCL,LOW);\n      delayMicroseconds(3); \n      if(send_data & 0x01)\n      {\n        digitalWrite(IIC_SDA,HIGH);\n      }\n      else\n      {\n        digitalWrite(IIC_SDA,LOW);\n      }\n      delayMicroseconds(3);\n      digitalWrite(IIC_SCL,HIGH); \n      delayMicroseconds(3);\n      send_data = send_data >> 1;\n  }\n}\n';
    generator.definitions_['5iic_end'] = 'void IIC_end()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);}\n';
    generator.setups_['setup_iic'] = '  pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);\n  IIC_start();\n    IIC_send(0x40);\n    IIC_end();\n    IIC_start();\n    IIC_send(0xc0);';

    var code = '';
    return code;
};
//点阵屏显示_显示图案
const display_Matrix16and8_DisplayChar_4wd = function (_, generator) {
    var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);

    var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send(' + dotMatrixArray + '[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';

    return code;
};

//点阵数组
const display_Matrix16and8_LedArray_4wd = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (let i = 1; i < 17; i++) {  //有16列
        a[i] = new Array();
        for (let j = 1; j < 9; j++) {  //8行
            a[i][9 - j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (let i = 1; i < 17; i++) {
        var tmp = ""
        for (let j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 16) ? ',' : '');
    }
    code += '};';
    //generator.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    generator.definitions_[varName] = "const uint8_t " + varName + "[16]=" + code;
    return [varName, generator.ORDER_ATOMIC];
};

///////////////显示表情//////////////////////
const ks4wd_matrix = function (_, generator) {

    generator.definitions_['1start01'] = 'unsigned char start01[] = {0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01};\n';
    generator.definitions_['2front'] = 'unsigned char front[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x12,0x09,0x12,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['3back'] = 'unsigned char back[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x48,0x90,0x48,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['4left'] = 'unsigned char left[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x44,0x28,0x10,0x44,0x28,0x10,0x44,0x28,0x10,0x00};\n';
    generator.definitions_['5right'] = 'unsigned char right[] = {0x00,0x10,0x28,0x44,0x10,0x28,0x44,0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['6Stop01'] = 'unsigned char STOP01[] = {0x2E,0x2A,0x3A,0x00,0x02,0x3E,0x02,0x00,0x3E,0x22,0x3E,0x00,0x3E,0x0A,0x0E,0x00};\n';
    generator.definitions_['7clear'] = 'unsigned char clear[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['8triange_full'] = 'unsigned char triangle_full[] = {0x80,0xC0,0xE0,0xF0,0xF8,0xFC,0xFE,0xFF,0xFF,0xFE,0xFC,0xF8,0xF0,0xE0,0xC0,0x80};\n';
    generator.definitions_['9heart'] = 'unsigned char heart_full[] = {0x00,0x00,0x0C,0x1E,0x3F,0x7F,0xFE,0xFC,0xFE,0x7F,0x3F,0x1E,0x0C,0x00,0x00,0x00};\n';
    generator.definitions_['atriange_back'] = 'unsigned char triangle_back[] = {0x01,0x03,0x07,0x0F,0x1F,0x3F,0x7F,0xFF,0xFF,0x7F,0x3F,0x1F,0x0F,0x07,0x03,0x01};\n';
    generator.definitions_['bsmile'] = 'unsigned char smile[] = {0x00,0x00,0x00,0x0C,0x02,0x02,0x0C,0x20,0x20,0x20,0x0C,0x02,0x02,0x0C,0x00,0x00};\n';
    generator.definitions_['csad'] = 'unsigned char sad[] = {0x00,0x00,0x02,0x02,0x02,0x12,0x08,0x04,0x08,0x12,0x22,0x02,0x02,0x00,0x00,0x00};\n';

    var dropdown_type = this.getFieldValue('matrix');
    var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send(' + dropdown_type + '[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';

    return code;
};

// export const ks4wd_light = function() {

//   generator.setups_['setup_input_A1'] = 'pinMode(A1, INPUT);';
//   generator.setups_['setup_input_A2'] = 'pinMode(A2, INPUT);';
//   var dropdown_type = this.getFieldValue('light');


//   var code = '';
//   if (dropdown_type == "left_light") code += 'analogRead(A1)';
//   if (dropdown_type == "right_light") code += 'analogRead(A2)';
//   return [code, generator.ORDER_ATOMIC];
// };



///////////////////////红外接收///////////////////
const ks4wd_ir_r = function (_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), blockly_core__WEBPACK_IMPORTED_MODULE_0__.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var branch = generator.statementToCode(this, 'DO');
    var branch2 = generator.statementToCode(this, 'DO2');
    generator.definitions_['1include_IRremote'] = '#include <IRremote.h>\n';
    //generator.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    generator.definitions_['2var_ir_recv_A0'] = 'IRrecv irrecv(A1);\ndecode_results results;\n';
    generator.setups_['setup_ir_recv_A0'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
const ks4wd_bluetooth = function (_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    //var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    //var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);


    //generator.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
    //generator.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
    generator.definitions_['1char'] = 'char ' + val + ';\n';

    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

///////////////////////////////4wd_Car/////////////////////////////////////////////////




////////////////////////////////////////////Tank-Car/////////////////////////

/////////////////////////led///////////////////////
const tank_led = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_led'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return code;
};

////////////////////////////////front//////////////////////////
const tank_FRONT = function (_, generator) {

    var value_front = generator.valueToCode(this, 'speed_F', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_front + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_front + ');\n';
    return code;
};

////////////////////////////////back//////////////////////////
const tank_BACK = function (_, generator) {

    var value_back = generator.valueToCode(this, 'speed_B', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_back + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_back + ');\n';
    return code;
};

////////////////////////////////left//////////////////////////
const tank_LEFT = function (_, generator) {

    var value_left = generator.valueToCode(this, 'speed_L', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_left + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_left + ');\n';
    return code;
};

////////////////////////////////turn_left//////////////////////////
const tank_TURN_LEFT = function (_, generator) {
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,100);\ndigitalWrite(2,HIGH);\nanalogWrite(6,180);\n';
    return code;
};


////////////////////////////////right//////////////////////////
const tank_RIGHT = function (_, generator) {

    var value_right = generator.valueToCode(this, 'speed_R', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_right + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_right + ');\n';
    return code;
};

////////////////////////////////turn_right//////////////////////////
const tank_TURN_RIGHT = function (_, generator) {

    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,180);\ndigitalWrite(2,HIGH);\nanalogWrite(6,100);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
const tank_STOP = function (_, generator) {
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n';
    return code;
};



///////////////////////Tank超声波//////////////////////
const Tank_sr04 = function (_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(12, LOW);\n'
        + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};







///////////////////////////////舵机2/////////////////////////
const Tank_servo2 = function (_, generator) {

    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);

    generator.definitions_['include_pulsewidth'] = 'volatile int pulsewidth;';
    generator.definitions_['var_angle'] = 'void procedure(int myangle) {\n  for (int i = 0; i <= 50; i = i + (1)) {\n    pulsewidth = myangle * 11 + 500;\n    digitalWrite(9,HIGH);\n    delayMicroseconds(pulsewidth);\n    digitalWrite(9,LOW);\n    delay((20 - pulsewidth / 1000));\n  }\n}\n';

    generator.setups_['setup_servo'] = 'pulsewidth = 0;\n  pinMode(9, OUTPUT);';

    var code = 'procedure(' + value_degree + ');\n';
    return code;
};

////////////////////////////////tank_Matrix//////////////////////////
///////////////////////16*8点阵/////////////////////////////
//初始化
const tank_Matrix_16and8_Init = function (_, generator) {
    var SDA = this.getFieldValue('SDA');
    var SCL = this.getFieldValue('SCL');
    generator.definitions_['1iic_scl'] = '#define IIC_SCL  ' + SCL + '\n';
    generator.definitions_['1iic_sda'] = '#define IIC_SDA  ' + SDA + '\n';
    generator.definitions_['1line'] = 'unsigned char data_line = 0;\n';
    generator.definitions_['1count01'] = 'unsigned char delay_count = 0;\n';
    generator.definitions_['3iic_start'] = 'void IIC_start()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);}\n';
    generator.definitions_['3iic_send'] = 'void IIC_send(unsigned char send_data)\n{\n  for(char i = 0;i < 8;i++)\n  {\n      digitalWrite(IIC_SCL,LOW);\n      delayMicroseconds(3); \n      if(send_data & 0x01)\n      {\n        digitalWrite(IIC_SDA,HIGH);\n      }\n      else\n      {\n        digitalWrite(IIC_SDA,LOW);\n      }\n      delayMicroseconds(3);\n      digitalWrite(IIC_SCL,HIGH); \n      delayMicroseconds(3);\n      send_data = send_data >> 1;\n  }\n}\n';
    generator.definitions_['3iic_end'] = 'void IIC_end()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);}\n';
    generator.setups_['setup_iic'] = '  pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);\n  IIC_start();\n    IIC_send(0x40);\n    IIC_end();\n    IIC_start();\n    IIC_send(0xc0);';

    var code = '';
    return code;
};
//点阵屏显示_显示图案
const tank_display_Matrix16and8_DisplayChar = function (_, generator) {
    var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);

    var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send(' + dotMatrixArray + '[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';

    return code;
};

//点阵数组
const tank_display_Matrix16and8_LedArray = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (let i = 1; i < 17; i++) {  //有16列
        a[i] = new Array();
        for (let j = 1; j < 9; j++) {  //8行
            a[i][9 - j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (let i = 1; i < 17; i++) {
        var tmp = ""
        for (let j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 16) ? ',' : '');
    }
    code += '};';
    //generator.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    generator.definitions_[varName] = "const uint8_t " + varName + "[16]=" + code;
    return [varName, generator.ORDER_ATOMIC];
};

///////////////显示表情//////////////////////
const Tank_matrix = function (_, generator) {

    generator.definitions_['1start01'] = 'unsigned char start01[] = {0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01};\n';
    generator.definitions_['2front'] = 'unsigned char front[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x12,0x09,0x12,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['3back'] = 'unsigned char back[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x48,0x90,0x48,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['4left'] = 'unsigned char left[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x44,0x28,0x10,0x44,0x28,0x10,0x44,0x28,0x10,0x00};\n';
    generator.definitions_['5right'] = 'unsigned char right[] = {0x00,0x10,0x28,0x44,0x10,0x28,0x44,0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['6Stop01'] = 'unsigned char STOP01[] = {0x2E,0x2A,0x3A,0x00,0x02,0x3E,0x02,0x00,0x3E,0x22,0x3E,0x00,0x3E,0x0A,0x0E,0x00};\n';
    generator.definitions_['7clear'] = 'unsigned char clear[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['8triange_full'] = 'unsigned char triangle_full[] = {0x80,0xC0,0xE0,0xF0,0xF8,0xFC,0xFE,0xFF,0xFF,0xFE,0xFC,0xF8,0xF0,0xE0,0xC0,0x80};\n';
    generator.definitions_['9heart'] = 'unsigned char heart_full[] = {0x00,0x00,0x0C,0x1E,0x3F,0x7F,0xFE,0xFC,0xFE,0x7F,0x3F,0x1E,0x0C,0x00,0x00,0x00};\n';
    generator.definitions_['atriange_back'] = 'unsigned char triangle_back[] = {0x01,0x03,0x07,0x0F,0x1F,0x3F,0x7F,0xFF,0xFF,0x7F,0x3F,0x1F,0x0F,0x07,0x03,0x01};\n';
    generator.definitions_['bsmile'] = 'unsigned char smile[] = {0x00,0x00,0x00,0x0C,0x02,0x02,0x0C,0x20,0x20,0x20,0x0C,0x02,0x02,0x0C,0x00,0x00};\n';
    generator.definitions_['csad'] = 'unsigned char sad[] = {0x00,0x00,0x02,0x02,0x02,0x12,0x08,0x04,0x08,0x12,0x22,0x02,0x02,0x00,0x00,0x00};\n';

    var dropdown_type = this.getFieldValue('matrix');
    var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send(' + dropdown_type + '[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';

    return code;
};



const Tank_light = function (_, generator) {

    generator.setups_['setup_input_A1'] = 'pinMode(A1, INPUT);';
    generator.setups_['setup_input_A2'] = 'pinMode(A2, INPUT);';
    var dropdown_type = this.getFieldValue('light');


    var code = '';
    if (dropdown_type == "left_light") code += 'analogRead(A1)';
    if (dropdown_type == "right_light") code += 'analogRead(A2)';
    return [code, generator.ORDER_ATOMIC];
};



///////////////////////红外接收///////////////////
const Tank_ir_r = function (_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), blockly_core__WEBPACK_IMPORTED_MODULE_0__.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var branch = generator.statementToCode(this, 'DO');
    var branch2 = generator.statementToCode(this, 'DO2');
    generator.definitions_['1include_IRremote'] = '#include <IRremote.h>\n';
    //generator.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    generator.definitions_['2var_ir_recv_3'] = 'IRrecv irrecv(3);\ndecode_results results;\n';
    generator.setups_['setup_ir_recv_3'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
const Tank_bluetooth = function (_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    //var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    //var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);


    //generator.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
    //generator.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
    generator.definitions_['1char'] = 'char ' + val + ';\n';

    //generator.setups_['2mySerial23'] = 'Serial.begin(9600);';

    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

////////////////////////////////////Turtle-Car///////////////////////////////////////

/////////////////////////led///////////////////////
const turtle_led = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_led'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return code;
};


////////////////////////////////front//////////////////////////
const turtle_FRONT = function (_, generator) {

    var value_front = generator.valueToCode(this, 'speed_F', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_front + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_front + ');\n';
    return code;
};

////////////////////////////////back//////////////////////////
const turtle_BACK = function (_, generator) {

    var value_back = generator.valueToCode(this, 'speed_B', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_back + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_back + ');\n';
    return code;
};

////////////////////////////////left//////////////////////////
const turtle_LEFT = function (_, generator) {

    var value_left = generator.valueToCode(this, 'speed_L', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_left + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_left + ');\n';
    return code;
};

////////////////////////////////turn_left//////////////////////////
const turtle_TURN_LEFT = function (_, generator) {
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,180);\ndigitalWrite(2,LOW);\nanalogWrite(6,100);\n';
    return code;
};


////////////////////////////////right//////////////////////////
const turtle_RIGHT = function (_, generator) {

    var value_right = generator.valueToCode(this, 'speed_R', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_right + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_right + ');\n';
    return code;
};

////////////////////////////////turn_right//////////////////////////
const turtle_TURN_RIGHT = function (_, generator) {

    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,100);\ndigitalWrite(2,LOW);\nanalogWrite(6,180);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
const turtle_STOP = function (_, generator) {
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n';
    return code;
};

// //////////////////////////红外避障///////////////////////////
// export const turtle_avoid = function() {
//   var dropdown_type = this.getFieldValue('avoid02');
//   generator.setups_['setup_output_left'] = 'pinMode(A0, INPUT);';
//   generator.setups_['setup_output_right'] = 'pinMode(A2, INPUT);';

//   var code = '';
//   if (dropdown_type == "left") code += 'digitalRead(A0)';
//   if (dropdown_type == "right") code += 'digitalRead(A2)';
//   return [code, generator.ORDER_ATOMIC];
// };

///////////////////////turtle超声波//////////////////////
const turtle_sr04 = function (_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(12, LOW);\n'
        + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
const turtle_track = function (_, generator) {
    var dropdown_type = this.getFieldValue('track');
    generator.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
    generator.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
    generator.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

    var code = '';
    if (dropdown_type == "track_left") code += 'digitalRead(11)';
    if (dropdown_type == "track_center") code += 'digitalRead(7)';
    if (dropdown_type == "track_right") code += 'digitalRead(8)';
    return [code, generator.ORDER_ATOMIC];
};



//////////////////music/////////////////////////

///////////////////////////////舵机/////////////////////////
const turtle_servo2 = function (_, generator) {
    //var dropdown_pin = generator.valueToCode(this, 'PIN',generator.ORDER_ATOMIC);
    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    //delay_time = delay_time.replace('(','').replace(')','');

    generator.definitions_['1include_Servo'] = '#include <Servo.h>';
    generator.definitions_['2var_servo'] = 'Servo servo_10;';
    generator.setups_['setup_servo'] = 'servo_10.attach(10);';

    var code = 'servo_10.write(' + value_degree + ');\n';
    return code;
};

///////////////////////////////舵机2/////////////////////////
const turtle_servo_bak = function (_, generator) {

    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);

    generator.definitions_['1include_pulsewidth'] = 'volatile int pulsewidth;';
    generator.definitions_['2var_angle'] = 'void procedure(int myangle) {\n  for (int i = 0; i <= 20; i = i + (1)) {\n    pulsewidth = myangle * 11 + 500;\n    digitalWrite(A3,HIGH);\n    delayMicroseconds(pulsewidth);\n    digitalWrite(A3,LOW);\n    delay((20 - pulsewidth / 1000));\n  }\n}\n';

    generator.setups_['setup_servo'] = 'pulsewidth = 0;\n  pinMode(9, OUTPUT);';

    var code = 'procedure(' + value_degree + ');\n';
    return code;
};

//////////////////////////////点阵初始化/////////////////////////////

const turtle_matrix_init = function (_, generator) {
    var SDA = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var SCL = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var addr = generator.valueToCode(this, 'address', generator.ORDER_ATOMIC);

    var matrixName = this.getFieldValue('matrixName');
    generator.definitions_['include_Matrix'] = '#include <Matrix.h>';
    generator.definitions_[matrixName] = 'Matrix ' + matrixName + '(' + SDA + ',' + SCL + ');';
    generator.setups_['setup_' + matrixName] = matrixName + '.begin(' + addr + '); \n';
    var code = matrixName + '.clear();\n';
    return code;
};


////////////////////////////////点阵1////////////////////////////
//执行器_点阵屏显示_显示图案
const turtle_matrix1 = function (_, generator) {
    var matrixName = this.getFieldValue('matrixName');
    var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);
    generator.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
    //  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
    var code = '';
    code += 'for(int i=0; i<8; i++)\n';
    code += '{\n'
    code += '  LEDArray[i]=' + dotMatrixArray + '[i];\n';
    code += '  for(int j=7; j>=0; j--)\n'
    code += '  {\n'
    code += '    if((LEDArray[i]&0x01)>0)\n';
    code += '    ' + matrixName + '.drawPixel(j, i,1);\n';
    code += '    LEDArray[i] = LEDArray[i]>>1;\n';
    code += '  }  \n'
    code += '}\n'
    code += matrixName + '.write();\n'
    return code;
};
//执行器_点阵屏显示_点阵数组
const turtle_matrix2 = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (let i = 1; i < 9; i++) {
        a[i] = new Array();
        for (let j = 1; j < 9; j++) {
            a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (let i = 1; i < 9; i++) {
        var tmp = ""
        for (let j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 8) ? ',' : '');
    }
    code += '};';
    //generator.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
    generator.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    //return ["LedArray_"+clearString(this.id), generator.ORDER_ATOMIC];
    return [varName, generator.ORDER_ATOMIC];
};

//////////////////////////6个图案///////////////////////////
const turtle_Matrix_6 = function (_, generator) {
    generator.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
    0x66, 0x99, 0x81, 0x81, 0x42, 0x24, 0x18, 0x00
    generator.definitions_['1smile'] = 'uint8_t matrix_smile[8]={0x3c,0x42,0x99,0xa5,0x81,0xa5,0x42,0x3c};';
    generator.definitions_['1heart'] = 'uint8_t matrix_heart[8]={0x18,0x3c,0x7e,0xff,0xff,0xff,0xe7,0x42};';
    generator.definitions_['2front2'] = 'uint8_t matrix_front2[8]={0x18,0x18,0x18,0x18,0xdb,0x7e,0x3c,0x18};';
    generator.definitions_['3back2'] = 'uint8_t matrix_back2[8]={0x18,0x3c,0x7e,0xdb,0x18,0x18,0x18,0x18};';
    generator.definitions_['4left2'] = 'uint8_t matrix_left2[8]={0x10,0x30,0x60,0xff,0xff,0x60,0x30,0x10};';
    generator.definitions_['5right2'] = 'uint8_t matrix_right2[8]={0x08,0x0c,0x06,0xff,0xff,0x06,0x0c,0x08};';
    generator.definitions_['6stop2'] = 'uint8_t matrix_stop2[8]={0x00,0x7e,0x42,0x5a,0x5a,0x42,0x7e,0x00};';

    var dropdown_type = this.getFieldValue('display');
    var code = 'for(int i=0; i<8; i++)\n  {\n    LEDArray[i]=' + dropdown_type + '[i];\n    for(int j=7; j>=0; j--)\n    {\n      if((LEDArray[i]&0x01)>0)\n      myMatrix.drawPixel(j, i,1);\n      LEDArray[i] = LEDArray[i]>>1;\n    }\n  }\n  myMatrix.write();';

    return code;
};

////////////////////////清屏/////////////////////////////
const turtle_Matrix_CLEAR = function () {
    var matrixName = this.getFieldValue('matrixName');
    var code = matrixName + '.clear();\n'
    code += matrixName + '.write();\n';
    return code;
};


///////////////////////红外接收///////////////////
const turtle_ir_r = function (_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), blockly_core__WEBPACK_IMPORTED_MODULE_0__.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var branch = generator.statementToCode(this, 'DO');
    var branch2 = generator.statementToCode(this, 'DO2');
    generator.definitions_['1include_IRremote'] = '#include <IRremote.h>\n';
    //generator.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    generator.definitions_['2var_ir_recv_A1'] = 'IRrecv irrecv(A1);\ndecode_results results;\n';
    generator.setups_['setup_ir_recv_A1'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
const turtle_bluetooth = function (_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    //var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    //var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);


    //generator.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
    //generator.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
    generator.definitions_['1char'] = 'char ' + val + ';\n';

    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};



/////////////////////////////////OTTO/////////////////////////
// 'use strict';
// goog.provide('generator.ottotop-car');
// goog.require('Blockly.Arduino');

////////////////////////////////OTTO_init//////////////////////////
const OTTO_init = function (_, generator) {

    var value_YL = generator.valueToCode(this, 'YL', generator.ORDER_ATOMIC);
    var value_YR = generator.valueToCode(this, 'YR', generator.ORDER_ATOMIC);
    var value_RL = generator.valueToCode(this, 'RL', generator.ORDER_ATOMIC);
    var value_RR = generator.valueToCode(this, 'RR', generator.ORDER_ATOMIC);

    generator.definitions_['1init1'] = '#include <Servo.h>\n#include <Oscillator.h>\n#include <EEPROM.h>\n#define N_SERVOS 4\n//-- First step: Configure the pins where the servos are attached\n/*\n         --------------- \n        |     O   O     |\n        |---------------|\nYR 3==> |               | <== YL 2\n         --------------- \n            ||     ||\n            ||     ||\nRR 5==>   -----   ------  <== RL 4\n         |-----   ------|\n*/\n#define EEPROM_TRIM false\n// Activate to take callibration data from internal memory//调整机械角度\n#define TRIM_RR ' + value_RR + '  //right02\n#define TRIM_RL ' + value_RL + '  //left02\n#define TRIM_YR ' + value_YR + '  //right01\n#define TRIM_YL ' + value_YL + '  //left01\n#define PIN_RR 5\n#define PIN_RL 4\n#define PIN_YR 3\n#define PIN_YL 2\n#define INTERVALTIME 10.0 \nOscillator servo[N_SERVOS];\n#include "SR04.h"\n#define TRIG_PIN 6\n#define ECHO_PIN 7\nSR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);\nlong a;\nint i = 0;\nint val = 0;\nvoid goingUp(int tempo);\nvoid drunk (int tempo);\nvoid noGravity(int tempo);\nvoid kickLeft(int tempo);\nvoid kickRight(int tempo);\nvoid run(int steps, int T=500);\nvoid walk(int steps, int T=1000);\nvoid backyard(int steps, int T=3000);\nvoid backyardSlow(int steps, int T=5000);\nvoid turnLeft(int steps, int T=3000);\nvoid turnRight(int steps, int T=3000);\nvoid moonWalkLeft(int steps, int T=1000);\nvoid moonWalkRight(int steps, int T=1000);\nvoid crusaito(int steps, int T=1000);\nvoid swing(int steps, int T=1000);\nvoid upDown(int steps, int T=1000);\nvoid flapping(int steps, int T=1000);\nint t=495;\ndouble pause=0;\n';
    generator.setups_['setup_init1'] = 'Serial.begin(9600);\n  servo[0].attach(PIN_RR);\n  servo[1].attach(PIN_RL);\n  servo[2].attach(PIN_YR);\n  servo[3].attach(PIN_YL);\n  int trim;\n  if(EEPROM_TRIM){\n    for(int x=0;x<4;x++){\n      trim=EEPROM.read(x);\n      if(trim>128)trim=trim-256;\n      Serial.print("TRIM ");\n      Serial.print(x);\n      Serial.print(" en ");\n      Serial.println(trim);\n      servo[x].SetTrim(trim);\n    }\n  }\n  else{\n    servo[0].SetTrim(TRIM_RR);\n    servo[1].SetTrim(TRIM_RL);\n    servo[2].SetTrim(TRIM_YR);\n    servo[3].SetTrim(TRIM_YL);\n  }\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);';
    generator.definitions_['2oscillate1'] = 'void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){\n  for (int i=0; i<4; i++) {\n    servo[i].SetO(O[i]);\n    servo[i].SetA(A[i]);\n    servo[i].SetT(T);\n    servo[i].SetPh(phase_diff[i]);\n  }\n  double ref=millis();\n   for (double x=ref; x<T+ref; x=millis()){\n     for (int i=0; i<4; i++){\n        servo[i].refresh();\n     }\n  }\n}\n';
    generator.definitions_['3moveNServos_001'] = 'unsigned long final_time;\nunsigned long interval_time;\nint oneTime;\nint iteration;\nfloat increment[N_SERVOS]; \nint oldPosition[]={90,90,90,90};\n';
    generator.definitions_['4moveNServos'] = 'void moveNServos(int time, int  newPosition[]){\n  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);\n  final_time =  millis() + time; \n  iteration = 1; \n  while(millis() < final_time){ //Javi del futuro cambia esto  \n      interval_time = millis()+INTERVALTIME;  \n      oneTime=0;\n      while(millis()<interval_time){\n          if(oneTime<1){ \n              for(int i=0;i<N_SERVOS;i++){\n                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));\n              }\n              iteration++;\n              oneTime++;\n          }\n      }\n  }   \n\n  for(int i=0;i<N_SERVOS;i++){  \n    oldPosition[i] = newPosition[i];\n  }   \n}\n';
    var code = '';
    return code;
};



////////////////////////////////front//////////////////////////
const otto_FRONT = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['1walk'] = ' void walk(int steps, int T)\n{\n  int A[4]= {15, 15, 30, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'walk(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////back//////////////////////////
const otto_BACK = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['1back1'] = ' void backyard(int steps, int T)\n{\n  int A[4]= {15, 15, 30, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'backyard(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////left//////////////////////////
const otto_LEFT = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['1left1'] = ' void turnLeft(int steps, int T)\n{\n  int A[4]= {20, 20, 10, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'turnLeft(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////right//////////////////////////
const otto_RIGHT = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['1turnRight'] = ' void turnRight(int steps, int T)\n{\n  int A[4]= {20, 20, 30, 10};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'turnRight(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};


////////////////////////////////stop//////////////////////////
const otto_STOP = function (_, generator) {
    generator.definitions_['1Stop'] = 'void Stop()\n{\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n}\n';
    var code = 'Stop();\n';
    return code;
};

////////////////////////////////moon_left//////////////////////////
const otto_moon_LEFT = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['moonLEFT'] = ' void moonLEFT(int steps, int T)\n{\n  int A[4]= {25, 25, 0, 0};\n  int O[4] = {-15, 15, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 - 120), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'moonLEFT(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////moon_right//////////////////////////
const otto_moon_RIGHT = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['moonRight'] = ' void moonRight(int steps, int T)\n{\n  int A[4]= {25, 25, 0, 0};\n  int O[4] = {-15, 15, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'moonRight(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_kickLeft//////////////////////////
const otto_kickLeft = function (_, generator) {
    generator.definitions_['kickLeft'] = 'void kickLeft(int tempo){\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n  delay(tempo);\n  servo[0].SetPosition(50); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(30); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(30); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo);\n}\n';
    var code = 'kickLeft(t);\n';
    return code;
};

////////////////////////////////otto_kickright//////////////////////////
const otto_kickright = function (_, generator) {
    generator.definitions_['kickright'] = 'void kickRight(int tempo){\nfor(int i=0;i<4;i++) servo[i].SetPosition(90);\n  delay(tempo);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(130); //pie izquiero\n  delay(tempo);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(100); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(150); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(80); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(150); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(100); //pie izquiero\n  delay(tempo);\n}\n';
    var code = 'kickRight(t);\n';
    return code;
};

////////////////////////////////otto_drunk//////////////////////////
const otto_drunk = function (_, generator) {
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['drunk'] = 'void drunk (int tempo){\n  pause=millis();\n  int move1[] = {60,70,90,90};\n  int move2[] = {110,120,90,90};\n  int move3[] = {60,70,90,90};\n  int move4[] = {110,120,90,90};\n  moveNServos(tempo*0.235,move1);\n  moveNServos(tempo*0.235,move2);\n  moveNServos(tempo*0.235,move3);\n  moveNServos(tempo*0.235,move4);\n  while(millis()<(pause+tempo));\n}\n';
    var code = 'drunk(' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_noGravity//////////////////////////
const otto_noGravity = function (_, generator) {
    generator.definitions_['noGravity'] = 'void noGravity(int tempo){\n  int move1[4] = {120,140,90,90};\n  int move2[4] = {140,140,90,90};\n  int move3[4] = {120,140,90,90};\n  int move4[4] = {90,90,90,90};\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n  for(int i=0;i<N_SERVOS;i++) oldPosition[i]=90;\n  moveNServos(tempo*2,move1);\n  moveNServos(tempo*2,move2);\n  delay(tempo*2);\n  moveNServos(tempo*2,move3);\n  moveNServos(tempo*2,move4);\n}\n';
    var code = 'noGravity(2*t);\n';
    return code;
};


////////////////////////////////otto_crusaito//////////////////////////
const otto_crusaito = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['crusaito'] = 'void crusaito(int steps, int T){\n    int A[4]= {25, 25, 30, 30};\n    int O[4] = {- 15, 15, 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)}; \n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'crusaito(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_segunda1//////////////////////////
const otto_segunda1 = function (_, generator) {
    generator.definitions_['segunda1'] = 'void segunda1() \n{\nint move1[4] = {90,90,80,100};\n  int move2[4] = {90,90,100,80};\n  int move3[4] = {90,90,80,100};\n  int move4[4] = {90,90,100,80};\n     pause=millis();\n      moveNServos(t*0.15,move1);\n      moveNServos(t*0.15,move2);\n      moveNServos(t*0.15,move3);\n      moveNServos(t*0.15,move4);\n      while(millis()<(pause+t));\n    }\n';
    var code = 'segunda1();\n';
    return code;
};

////////////////////////////////otto_jump//////////////////////////
const otto_jump = function (_, generator) {
    generator.definitions_['jump'] = 'void jump() \n{\nint move5[4] = {70,110,80,100};\n  int move6[4] = {70,110,100,80};\n  int move7[4] = {90,90,80,100};\n  int move8[4] = {90,90,100,80};\npause=millis();\n    moveNServos(t*0.15,move5);\n    moveNServos(t*0.15,move6);\n    moveNServos(t*0.15,move7);\n    moveNServos(t*0.15,move8);\n    while(millis()<(pause+t));\n  }\n';
    var code = 'jump();\n';
    return code;
};

////////////////////////////////otto_crusaito//////////////////////////
const otto_swing = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['swing'] = 'void swing(int steps, int T){\n    int A[4]= {15, 15, 8, 8};\n    int O[4] = {-A[0], A[1], 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};\n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'swing(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_swing//////////////////////////
const otto_flapping = function (_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['flapping'] = 'void flapping(int steps, int T){\n    int A[4]= {25, 25, 0, 0};\n    int O[4] = {-15, 15, 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';

    var code = 'flapping(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_goingUp//////////////////////////
const otto_goingUp = function (_, generator) {
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['goingUp'] = 'void goingUp(int tempo){\n      pause=millis();\n      for(int i=0;i<4;i++) servo[i].SetPosition(90);\n      delay(tempo);\n      servo[0].SetPosition(80);\n      servo[1].SetPosition(100);\n      delay(tempo);\n      servo[0].SetPosition(70);\n      servo[1].SetPosition(110);\n      delay(tempo);\n      servo[0].SetPosition(60);\n      servo[1].SetPosition(120);\n      delay(tempo);\n      servo[0].SetPosition(50);\n      servo[1].SetPosition(130);\n      delay(tempo);\n      while(millis()<pause+8*t);\n}\n';
    var code = 'goingUp(' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_dance//////////////////////////
/*export const otto_dance = function() {
  generator.definitions_['dance'] = '';
  var code = 'dance(t);\n';
  return code;
};*/

//舵机
const otto_servo = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    var delay_time = generator.valueToCode(this, 'time', generator.ORDER_ATOMIC) || '0'
    //delay_time = delay_time.replace('(','').replace(')','');

    generator.definitions_['1include_Servo'] = '#include <Servo.h>';
    generator.definitions_['2var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
    generator.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

    var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n' + 'delay(' + delay_time + ');\n';
    return code;
};

///////////////////////otto超声波//////////////////////
const otto_sr04 = function (_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(7, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(6, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(6, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(6, LOW);\n'
        + '  float distance = pulseIn(7, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};


/////////////////////////////////////蓝牙////////////////////////////////////
const otto_bluetooth = function (_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    //var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    //var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);


    //generator.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
    //generator.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
    generator.definitions_['1char'] = 'char ' + val + ';\n';

    generator.setups_['2mySerial23'] = 'Serial.begin(9600);';

    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

/***/ }),

/***/ "./src/language/en.js":
/*!****************************!*\
  !*** ./src/language/en.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnCatgories: () => (/* binding */ EnCatgories),
/* harmony export */   EnMsg: () => (/* binding */ EnMsg)
/* harmony export */ });
const EnMsg = {};

//坦克车
EnMsg.tank_front = 'front';
EnMsg.tank_back = 'back';
EnMsg.tank_left = 'left';
EnMsg.tank_turn_left = 'turn_left';
EnMsg.tank_right = 'right';
EnMsg.tank_turn_right = 'turn_right';
EnMsg.tank_stop = 'stop';
EnMsg.tank_speed = 'speed';
EnMsg.left_light_sensor = 'left_light_sensor';
EnMsg.right_light_sensor = 'right_light_sensor';
EnMsg.tank_choose = 'choose';

EnMsg.tank_L_ir_a = 'left_infrared_avoid';
EnMsg.tank_R_ir_a = 'right_infrared_avoid';
EnMsg.tank_L_track = 'left_tracking';
EnMsg.tank_C_track = 'center_tracking';
EnMsg.tank_R_track = 'right_tracking';

EnMsg.tank_sr01 = 'ultrasonic';
EnMsg.tank_buzzer = 'buzzer';
EnMsg.tank_notone = 'No_Tone';
EnMsg.tank_play_music = 'play_music';
EnMsg.tank_Ode_to_joy = 'Ode_to_Joy';
EnMsg.tank_birthday = 'birthday';
EnMsg.tank_fre = 'frequency';

EnMsg.MIXLY_Tank_SERVO = 'servo';
EnMsg.MIXLY_Tank_matrix = 'Matrix_init';

EnMsg.tank_ir_R = 'infrared_module';
EnMsg.tank_ir_RD = 'infrared_receive';
EnMsg.tank_Bluetooth = 'BLE_module';
EnMsg.tank_Bluetooth_rec = 'BLE_receive';

EnMsg.tank_on_off = 'electrical level';
EnMsg.tank_high = 'HIGH';
EnMsg.tank_low = 'LOW';


//乌龟车
EnMsg.turtle_front = 'front';
EnMsg.turtle_back = 'back';
EnMsg.turtle_left = 'left';
EnMsg.turtle_turn_left = 'turn_left';
EnMsg.turtle_right = 'right';
EnMsg.turtle_turn_right = 'turn_right';
EnMsg.turtle_stop = 'stop';
EnMsg.turtle_speed = 'speed';

EnMsg.turtle_L_ir_a = 'left_infrared_avoid';
EnMsg.turtle_R_ir_a = 'right_infrared_avoid';
EnMsg.turtle_L_track = 'left_tracking';
EnMsg.turtle_C_track = 'center_tracking';
EnMsg.turtle_R_track = 'right_tracking';

EnMsg.turtle_sr01 = 'ultrasonic';
EnMsg.turtle_buzzer = 'buzzer';
EnMsg.turtle_notone = 'No_Tone';
EnMsg.turtle_play_music = 'play_music';
EnMsg.turtle_Ode_to_joy = 'Ode_to_Joy';
EnMsg.turtle_birthday = 'birthday';
EnMsg.turtle_fre = 'frequency';

EnMsg.MIXLY_turtle_SERVO = 'servo';
EnMsg.MIXLY_turtle_matrix = 'Matrix_init';

EnMsg.turtle_ir_R = 'infrared_module';
EnMsg.turtle_ir_RD = 'infrared_receive';
EnMsg.turtle_Bluetooth = 'BLE_module';
EnMsg.turtle_Bluetooth_rec = 'BLE_receive';

EnMsg.turtle_on_off = 'electrical level';
EnMsg.turtle_high = 'HIGH';
EnMsg.turtle_low = 'LOW';

//2wd桌面小车
EnMsg.Desk_on_off = 'electrical level';

EnMsg.Desk_front = 'front';
EnMsg.Desk_back = 'back';
EnMsg.Desk_left = 'left';
EnMsg.Desk_turn_left = 'turn_left';
EnMsg.Desk_right = 'right';
EnMsg.Desk_turn_right = 'turn_right';
EnMsg.Desk_stop = 'stop';
EnMsg.Desk_speed = 'speed';

EnMsg.Desk_L_ir_a = 'left_infrared_avoid';
EnMsg.Desk_R_ir_a = 'right_infrared_avoid';
EnMsg.Desk_L_track = 'left_tracking';
EnMsg.Desk_C_track = 'center_tracking';
EnMsg.Desk_R_track = 'right_tracking';

EnMsg.Desk_sr01 = 'ultrasonic';
EnMsg.Desk_buzzer = 'buzzer';
EnMsg.Desk_notone = 'No_Tone';
EnMsg.Desk_play_music = 'play_music';
EnMsg.Desk_Ode_to_joy = 'Ode_to_Joy';
EnMsg.Desk_birthday = 'birthday';
EnMsg.Desk_fre = 'frequency';
EnMsg.Desk_ir_R = 'infrared_module';
EnMsg.Desk_ir_RD = 'infrared_receive';
EnMsg.Desk_Bluetooth = 'BLE_module';
EnMsg.Desk_Bluetooth_rec = 'BLE_receive';

//4wd小车
EnMsg.ks4wd_front = 'front';
EnMsg.ks4wd_back = 'back';
EnMsg.ks4wd_left = 'left';
EnMsg.ks4wd_turn_left = 'turn_left';
EnMsg.ks4wd_right = 'right';
EnMsg.ks4wd_turn_right = 'turn_right';
EnMsg.ks4wd_stop = 'stop';
EnMsg.ks4wd_speed = 'speed';

EnMsg.ks4wd_choose = 'choose';

EnMsg.ks4wd_L_ir_a = 'left_infrared_avoid';
EnMsg.ks4wd_R_ir_a = 'right_infrared_avoid';
EnMsg.ks4wd_L_track = 'left_tracking';
EnMsg.ks4wd_C_track = 'center_tracking';
EnMsg.ks4wd_R_track = 'right_tracking';

EnMsg.ks4wd_sr01 = 'ultrasonic';
EnMsg.ks4wd_buzzer = 'buzzer';
EnMsg.ks4wd_notone = 'No_Tone';
EnMsg.ks4wd_play_music = 'play_music';
EnMsg.ks4wd_Ode_to_joy = 'Ode_to_Joy';
EnMsg.ks4wd_birthday = 'birthday';
EnMsg.ks4wd_fre = 'frequency';

EnMsg.MIXLY_ks4wd_SERVO = 'servo';
EnMsg.MIXLY_ks4wd_matrix = 'Matrix_init';

EnMsg.ks4wd_ir_R = 'infrared_module';
EnMsg.ks4wd_ir_RD = 'infrared_receive';
EnMsg.ks4wd_Bluetooth = 'BLE_module';
EnMsg.ks4wd_Bluetooth_rec = 'BLE_receive';

EnMsg.ks4wd_on_off = 'electrical level';
EnMsg.ks4wd_high = 'HIGH';
EnMsg.ks4wd_low = 'LOW';

EnMsg.ksCar_forward = 'Move forward';
EnMsg.ksCar_backward = 'Move backward';
EnMsg.ksCar_left = 'Left rotation';
EnMsg.ksCar_right = 'Right rotation';

//otto_frog
EnMsg.otto_init = 'Frog_init';
EnMsg.otto_YL = 'Adjust the left leg';
EnMsg.otto_YR = 'Adjust the right leg';
EnMsg.otto_RL = 'Adjust the left foot';
EnMsg.otto_RR = 'Adjust the right foot';
EnMsg.otto_steps = 'step number';
EnMsg.otto_speed = 'speed';
EnMsg.otto_left_moonwalk = 'left_moonwalk';
EnMsg.otto_right_moonwalk = 'right_moonwalk';
EnMsg.otto_left_galop = 'left_galop';
EnMsg.otto_right_galop = 'right_galop';
EnMsg.otto_drunk = 'drunk';
EnMsg.otto_noGravity = 'noGravity';
EnMsg.otto_crusaito = 'crusaito';
EnMsg.otto_friction_pace = 'friction_pace';
EnMsg.otto_jump = 'jump jump jump';
EnMsg.otto_flapping = 'flapping';
EnMsg.otto_swing = 'swing';
EnMsg.otto_goingUp = 'goingUp';

EnMsg.otto_front = 'front';
EnMsg.otto_back = 'back';
EnMsg.otto_left = 'left';
EnMsg.otto_turn_left = 'turn_left';
EnMsg.otto_right = 'right';
EnMsg.otto_turn_right = 'turn_right';
EnMsg.otto_stop = 'Keep standing';
EnMsg.otto_speed = 'speed';

EnMsg.otto_L_ir_a = 'left_infrared_avoid';
EnMsg.otto_R_ir_a = 'right_infrared_avoid';
EnMsg.otto_L_track = 'left_tracking';
EnMsg.otto_C_track = 'center_tracking';
EnMsg.otto_R_track = 'right_tracking';

EnMsg.otto_servo = 'Servo';
EnMsg.otto_angle = 'angle';
EnMsg.otto_sr01 = 'ultrasonic';
EnMsg.otto_buzzer = 'buzzer';
EnMsg.otto_notone = 'No_Tone';
EnMsg.otto_play_music = 'play_music';
EnMsg.otto_Ode_to_joy = 'Ode_to_Joy';
EnMsg.otto_birthday = 'birthday';
EnMsg.otto_fre = 'frequency';
EnMsg.otto_ir_R = 'infrared_module';
EnMsg.otto_ir_RD = 'infrared_receive';
EnMsg.otto_Bluetooth = 'BLE_module';
EnMsg.otto_Bluetooth_rec = 'BLE_receive';






//keyes brick
EnMsg.ke_red_led = 'red_led';
EnMsg.ke_dual_led = 'dual_led';
EnMsg.ke_yellow_led = 'yellow_led';
EnMsg.ke_white_led = 'white_led';
EnMsg.ke_3W = '3W_led';
EnMsg.ke_led_green = 'green_led';

EnMsg.ke_msgb_led1 = 'The magic light cup_LED';
EnMsg.ke_msgb_sor1 = 'The magic light cup sensor';
EnMsg.ke_shouzhi1 = 'Finger heart rate';
EnMsg.ke_jg1 = 'laser';

EnMsg.Kids_anologWrite = 'anologWrite';
EnMsg.Kids_value = 'value';


EnMsg.Kids_ON = 'HIGH';
EnMsg.Kids_OFF = 'LOW';
EnMsg.Kids_anologWrite = 'analogWrite';

EnMsg.Kids_iic = 'PIN：SDA# A4, SCL# A5';
EnMsg.Kids_rot = 'button_PIN';
EnMsg.Kids_rot_count = 'count';
EnMsg.Kids_bits = 'string';
EnMsg.Kids_pin = 'PIN';

EnMsg.Kids_iic_pin = 'PIN #SDA:A4,#SCL:A5';
EnMsg.Kids_lcd_p = 'LCD';
EnMsg.Kids_shilihua = 'Instantiation name';
EnMsg.Kids_size = 'font size';

EnMsg.Kids_printcount = 'Display digits';
EnMsg.ke_string = 'display character';

EnMsg.Kids_lcd_left = 'LCD_Scroll to the left';
EnMsg.Kids_lcd_right = 'LCD_Scroll to the right';

EnMsg.ke_TM1637 = '4 digit 8-segment LED digital';
EnMsg.ke_ws = 'digit';
EnMsg.ke_begin = 'Display position';
EnMsg.ke_fill0 = 'add 0?';
EnMsg.ke_light = 'Brightness0~7';
EnMsg.ke_XY = 'Show or hide';
EnMsg.ke_L = 'left';
EnMsg.ke_R = 'right';
EnMsg.ke_MH = 'colon';
EnMsg.ke_value = 'value';

EnMsg.ke_oled_init = 'OLED_init';
EnMsg.ke_oled_piexl = 'OLED_point coordinates';
EnMsg.ke_oled_x = 'column';
EnMsg.ke_oled_y = 'row';
EnMsg.ke_oled_cong = 'from';
EnMsg.ke_oled_dao = 'to';
EnMsg.ke_oled_kai = 'initial point';
EnMsg.ke_oled_kuan = 'width';
EnMsg.ke_oled_chang = 'height';
EnMsg.ke_oled_angle1 = 'angle1';
EnMsg.ke_oled_angle2 = 'angle2';
EnMsg.ke_oled_angle3 = 'angle3';

EnMsg.ke_oled_line = 'OLED_line';
EnMsg.ke_oled_rect = 'OLED_hollow rectangle';
EnMsg.ke_oled_fil_lrect = 'OLED_solid rectangle';
EnMsg.ke_oled_r_rect = 'OLED_hollow rounded rectangle';
EnMsg.ke_oled_r_fill_rect = 'OLED_solid rounded rectangle';
EnMsg.ke_oled_circle = 'OLED_hollow circle  Center coordinates';
EnMsg.ke_oled_circle_radius = 'Circle radius';
EnMsg.ke_oled_radius = 'Corner radius';
EnMsg.ke_oled_fill_circle = 'OLED_solid circle  Center coordinates';
EnMsg.ke_oled_triangle = 'OLED_hollow triangle';
EnMsg.ke_oled_fill_triangle = 'OLED_solid triangle';
EnMsg.ke_oled_string1 = 'OLED_displays a string or number';
EnMsg.ke_oled_weizhi = 'display position';
EnMsg.ke_oled_print = 'display';
EnMsg.ke_oled_clear = 'OLED_clear';


EnMsg.MIXLY_ke_LED1 = 'Piranha LED';
EnMsg.MIXLY_ke_LED2 = 'Red Piranha LED';
EnMsg.MIXLY_ke_LED3 = 'Green Piranha LED';
EnMsg.MIXLY_ke_LED4 = 'Yellow Piranha LED';
EnMsg.MIXLY_ke_LED5 = 'Blue Piranha LED';
EnMsg.MIXLY_ke_LED01 = 'Straw cap LED';
EnMsg.MIXLY_ke_LED02 = 'Red Straw cap LED';
EnMsg.MIXLY_ke_LED03 = 'Green Straw cap LED';
EnMsg.MIXLY_ke_LED04 = 'Yellow straw cap LED';
EnMsg.MIXLY_ke_LED05 = 'Blue Straw cap LED';
EnMsg.MIXLY_ke_QCD = 'Colorful lights';
EnMsg.MIXLY_ke_RGB = 'RGB';

EnMsg.MIXLY_ke_BUZZER1 = 'Active buzzer';
EnMsg.MIXLY_ke_BUZZER2 = 'Passive Buzzer';
EnMsg.MIXLY_ke_RELAY = 'Relay';
EnMsg.MIXLY_ke_MOTOR = 'Fan';
EnMsg.MIXLY_ke_MOTOR01 = 'geared motor';
EnMsg.MIXLY_ke_SERVO = 'servo';
EnMsg.MIXLY_ke_TB6612 = 'TB6612motor';
EnMsg.MIXLY_H = 'front';
EnMsg.MIXLY_L = 'back';

EnMsg.MIXLY_ke_2812RGB = 'Full Color Led';

EnMsg.MIXLY_ke_IR_G = 'PIR Sensor';
EnMsg.MIXLY_ke_FLAME = 'Flame Sensor';
EnMsg.MIXLY_ke_HALL = 'Hall Sensor';
EnMsg.MIXLY_ke_CRASH = 'Crash Sensor';
EnMsg.MIXLY_ke_BUTTON = 'Button';
EnMsg.MIXLY_ke_TUOCH = 'Capacitive Touch';
EnMsg.MIXLY_ke_KNOCK = 'Knock Sensor';
EnMsg.MIXLY_ke_TILT = 'Tilt Sensor';
EnMsg.MIXLY_ke_SHAKE = 'Vibration Sensor';
EnMsg.MIXLY_ke_REED_S = 'Reed Switch Sensor';
EnMsg.MIXLY_ke_TRACK = 'Tracking Sensor';
EnMsg.MIXLY_ke_AVOID = 'Obstacle Avoidance MSensor';
EnMsg.MIXLY_ke_LIGHT_B = 'Light Interrupt Sensor';
EnMsg.MIXLY_ke_ROT = 'Rotation';


EnMsg.MIXLY_ke_ANALOG_T = 'Analog Temperature Sensor';
EnMsg.MIXLY_ke_SOUND = 'Sound Sensor';
EnMsg.MIXLY_ke_LIGHT = 'photosensitive Sensor';
EnMsg.MIXLY_ke_WATER = 'Water Level Sensor';
EnMsg.MIXLY_ke_SOIL = 'Soil Sensor';
EnMsg.MIXLY_ke_POTENTIOMETER = 'rotational potentiometer';
EnMsg.MIXLY_ke_LM35 = 'LM35 Temperature Sensor';
EnMsg.MIXLY_ke_SLIDE_POTENTIOMETER = 'slide potentiometer';
EnMsg.MIXLY_ke_TEMT6000 = 'TEMT6000 Ambient Light';
EnMsg.MIXLY_ke_STEAM = 'water vapor sensor';
EnMsg.MIXLY_ke_FILM_P = 'Thin-film Pressure Sensor';
EnMsg.MIXLY_ke_JOYSTICK = 'Joystick Sensor';
EnMsg.MIXLY_ke_JOYSTICK_btn = 'Joystick_button';
EnMsg.MIXLY_ke_SMOKE = 'Smoke Sensor';
EnMsg.MIXLY_ke_ALCOHOL = 'Alcohol Sensor';
EnMsg.MIXLY_ke_MQ135 = 'MQ135 Air Quality';
EnMsg.MIXLY_ke_18B20 = '18B20 Temperature Sensor';
EnMsg.MIXLY_ke_18B20_R = 'Getting temperature';
EnMsg.MIXLY_ke_DHT11 = 'temperature and humidity Sensor';
EnMsg.MIXLY_DHT11_H = 'getTemperature';    /////////////
EnMsg.MIXLY_DHT11_T = 'getHumidity';     ////////////
EnMsg.MIXLY_ke_BMP180 = 'BMP180 altimeter Sensor';
EnMsg.MIXLY_ke_BMP180_T = 'temperature';
EnMsg.MIXLY_ke_BMP180_A = 'atmosphere';
EnMsg.MIXLY_ke_BMP180_H = 'height above sea level ';

EnMsg.MIXLY_ke_BMP280 = 'BMP280 altimeter Sensor';
EnMsg.MIXLY_ke_BMP280_T = 'temperature';
EnMsg.MIXLY_ke_BMP280_A = 'atmosphere';
EnMsg.MIXLY_ke_BMP280_H = 'height above sea level';

EnMsg.MIXLY_ke_SR01 = 'SR01 Ultrasound Module';
EnMsg.MIXLY_ke_3231 = 'DS3231 clock';
EnMsg.MIXLY_ke_ADXL345 = 'Acceleration Sensor';
EnMsg.MIXLY_ADXL345_X = 'X-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_Y = 'Y-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_Z = 'Z-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_XA = 'X-axis angle';  ///
EnMsg.MIXLY_ADXL345_YA = 'Y-axis angle';  ///


EnMsg.MIXLY_ke_OLED = 'OLED_displays a string or number';
EnMsg.MIXLY_ke_1602LCD = 'IIC1602LCD';
EnMsg.MIXLY_SETUP = 'setup';  ////////////////
EnMsg.MIXLY_LCD_ADDRESS = 'address'; /////////
EnMsg.MIXLY_LCD_PRINT1 = 'print line1';  /////////
EnMsg.MIXLY_LCD_PRINT2 = 'print line2'; ///////////
EnMsg.MIXLY_LCD_ROW = 'row'; /////
EnMsg.MIXLY_LCD_COLUMN = 'column'; /////////
EnMsg.MIXLY_LCD_PRINT = 'print'; ////
EnMsg.MIXLY_LCD_STAT_ON = 'On';  /////
EnMsg.MIXLY_LCD_STAT_OFF = 'Off';  /////
EnMsg.MIXLY_LCD_STAT_CURSOR = 'Cursor';  ////
EnMsg.MIXLY_LCD_STAT_NOCURSOR = 'noCursor';  ////
EnMsg.MIXLY_LCD_STAT_BLINK = 'Blink';  ////
EnMsg.MIXLY_LCD_STAT_NOBLINK = 'noBlink'; ///
EnMsg.MIXLY_LCD_STAT_CLEAR = 'Clear';  ///
EnMsg.MIXLY_LCD_NOBACKLIGHT = 'NoBackLight'; ///
EnMsg.MIXLY_LCD_BACKLIGHT = 'BackLight'; ///
EnMsg.MIXLY_ke_2004LCD = 'IIC2004LCD';
EnMsg.MIXLY_ke_print1 = 'print line1';
EnMsg.MIXLY_ke_print2 = 'print line2';
EnMsg.MIXLY_ke_print3 = 'print line3';
EnMsg.MIXLY_ke_print4 = 'print line4';

EnMsg.MIXLY_ke_MATRIX = '8*8 dot matrix';
EnMsg.MIXLY_ke_TM1637 = '4 digit 8-segment LED digital';
EnMsg.MIXLY_ke_TM1637_C = 'digit';
EnMsg.MIXLY_ke_TM1637_P = 'display position';
EnMsg.MIXLY_ke_TM1637_Fill = 'add 0?';
EnMsg.MIXLY_ke_TM1637_light = 'brightness 0~7';
EnMsg.MIXLY_ke_TM1637_xy = 'show or hide';
EnMsg.MIXLY_ke_TM1637_left = 'left';
EnMsg.MIXLY_ke_TM1637_maohao = 'colon';
EnMsg.MIXLY_ke_TM1637_right = 'right';
EnMsg.MIXLY_ke_value = 'value';


EnMsg.MIXLY_ke_IR_E = 'Infrared Transmitter Module';
EnMsg.MIXLY_ke_IR_R = 'Infrared Receiver Module';
EnMsg.MIXLY_ke_W5100 = 'W5100 Ethernet Module';
EnMsg.MIXLY_ke_BLUETOOTH = 'Bluetooth 2.0 Module';
EnMsg.MIXLY_ke_read = 'Received signal';


//EnMsg.MIXLY_ke_kzsc = 'Control output';

EnMsg.MIXLY_ke_Count = 'count';

EnMsg.MIXLY_ke_YEAR = 'year';
EnMsg.MIXLY_ke_MONTH = 'month';
EnMsg.MIXLY_ke_DAY = 'day';
EnMsg.MIXLY_ke_HOUR = 'hour';
EnMsg.MIXLY_ke_MINUTE = 'minute';
EnMsg.MIXLY_ke_SECOND = 'second';
EnMsg.MIXLY_ke_WEEK = 'week';

EnMsg.MIXLY_ke_angle = 'angle';

EnMsg.kids_Ode_to_joy = "Ode_to_joy";
EnMsg.kids_birthday = "birthday";

EnMsg.kids_tone = "tone";
EnMsg.kids_beat = "beat";
EnMsg.kids_play_tone = "play_tone";
EnMsg.kids_notone = "turn off the buzzer";

EnMsg.kids_ADkey = "7 key module";


//////////////keyestudio/////////////////////
EnMsg.Ks_ON = 'HIGH';
EnMsg.Ks_OFF = 'LOW';

EnMsg.ks_MQ_d = 'Flammable gas Sensor-digital';
EnMsg.ks_MQ_a = 'Flammable gas Sensor-analog';

EnMsg.KS_LED3wd = 'LED 3W';
EnMsg.KS_LED_W = 'white_LED';
EnMsg.KS_LED_R = 'Red_LED';
EnMsg.KS_LED_G = 'Green_LED';
EnMsg.KS_LED_B = 'Blue_LED';
EnMsg.KS_LED_Y = 'Yellow_LED';

EnMsg.MIXLY_KS_BUZZER1 = 'Active buzzer';
EnMsg.MIXLY_KS_BUZZER2 = 'Passive Buzzer';
EnMsg.ks_tone = 'tone';
EnMsg.ks_beat = 'beat';
EnMsg.ks_music = 'play_tone';
EnMsg.ks_Ode_to_joy = 'Ode_to_joy';
EnMsg.ks_birthday = 'birthday';
EnMsg.ks_tetris = 'tetris';
EnMsg.ks_star_war = 'star_war';
EnMsg.ks_super_mario = 'super_mario';
EnMsg.ks_christmas = 'christmas';
EnMsg.ks_notone1 = 'turn off the buzzer';


EnMsg.MIXLY_KS_RELAY = 'Relay';
EnMsg.MIXLY_KS_MOTOR = 'Motor';
EnMsg.MIXLY_KS_SERVO = 'servo';
EnMsg.MIXLY_KS_2812RGB = '2812RGB Module';

EnMsg.MIXLY_KS_IR_G = 'PIR Sensor';
EnMsg.MIXLY_KS_FLAME = 'Flame_Sensor_D';
EnMsg.MIXLY_KS_FLAM_a = 'Flame_Sensor_a';
EnMsg.MIXLY_KS_HALL = 'Hall Sensor';
EnMsg.MIXLY_KS_CRASH = 'Crash Sensor';
EnMsg.MIXLY_KS_BUTTON = 'Button';
EnMsg.MIXLY_KS_TUOCH = 'Capacitive Touch';
EnMsg.MIXLY_KS_KNOCK = 'Knock Module';
EnMsg.MIXLY_KS_TILT = 'Tilt Module';
EnMsg.MIXLY_KS_SHAKE = 'Vibration Module';
EnMsg.MIXLY_KS_REED_S = 'Reed Switch Module';
EnMsg.MIXLY_KS_TRACK = 'Tracking Module';
EnMsg.MIXLY_KS_AVOID = 'Obstacle Avoidance Module';
EnMsg.MIXLY_KS_LIGHT_B = 'Photo Interrupt Module';

EnMsg.MIXLY_KS_ANALOG_T = 'Analog Temperature Sensor';
EnMsg.MIXLY_KS_SOUND = 'Sound Sensor';
EnMsg.KS_LIGHT = 'Photocell Sensor';
EnMsg.MIXLY_KS_WATER = 'Water Level Sensor';
EnMsg.KS_SOIL = 'Soil moisture Sensor';
EnMsg.MIXLY_KS_POTENTIOMETER = 'rotate potentiometer';
EnMsg.MIXLY_KS_LM35 = 'LM35 Temperature Sensor';
EnMsg.MIXLY_KS_SLIDE_POTENTIOMETER = 'slide potentiometer';
EnMsg.MIXLY_KS_TEMT6000 = 'TEMT6000 Ambient Light';
EnMsg.KS_STEAM = 'water sensor';
EnMsg.MIXLY_KS_FILM_P = 'Thin-film Pressure Sensor';
EnMsg.MIXLY_KS_JOYSTICK = 'Joystick Module';
EnMsg.MIXLY_KS_SMOKE = 'Smoke Sensor';
EnMsg.MIXLY_KS_ALCOHOL = 'Alcohol Sensor';
EnMsg.MIXLY_KS_MQ135 = 'MQ135 Air Quality';
EnMsg.MIXLY_KS_18B20 = '18B20 Temperature Module';
EnMsg.MIXLY_KS_RT = 'temperature';

EnMsg.MIXLY_KS_DHT11 = 'temperature and humidity module';
EnMsg.MIXLY_DHT11_H = 'getTemperature';    /////////////
EnMsg.MIXLY_DHT11_T = 'getHumidity';     ////////////
EnMsg.MIXLY_KS_BMP180 = 'BMP180 altimeter module';
EnMsg.MIXLY_KS_T = 'temperature';
EnMsg.MIXLY_KS_QY = 'barometric pressure';
EnMsg.MIXLY_KS_H = 'altitude';

EnMsg.KS_SR01 = 'Ultrasonic Module';
EnMsg.MIXLY_KS_3231 = 'DS3231 clock';
EnMsg.MIXLY_KS_GET = 'get DS3231 time';
EnMsg.KS_ADXL345 = 'Acceleration Sensor ADXL345';
EnMsg.MIXLY_ADXL345_X = 'X-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_Y = 'Y-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_Z = 'Z-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_XA = 'X-axis angle';  ///
EnMsg.MIXLY_ADXL345_YA = 'Y-axis angle';  ///



EnMsg.MIXLY_KS_OLED = 'OLED Module';
EnMsg.MIXLY_SETUP = 'setup';  ////////////////
EnMsg.MIXLY_LCD_ADDRESS = 'address'; /////////
EnMsg.MIXLY_LCD_PRINT1 = 'peint line1';  /////////
EnMsg.MIXLY_LCD_PRINT2 = 'print line2'; ///////////
EnMsg.MIXLY_LCD_ROW = 'row'; /////
EnMsg.MIXLY_LCD_COLUMN = 'column'; /////////
EnMsg.MIXLY_LCD_PRINT = 'print'; ////
EnMsg.MIXLY_LCD_STAT_ON = 'On';  /////
EnMsg.MIXLY_LCD_STAT_OFF = 'Off';  /////
EnMsg.MIXLY_LCD_STAT_CURSOR = 'Cursor';  ////
EnMsg.MIXLY_LCD_STAT_NOCURSOR = 'noCursor';  ////
EnMsg.MIXLY_LCD_STAT_BLINK = 'Blink';  ////
EnMsg.MIXLY_LCD_STAT_NOBLINK = 'noBlink'; ///
EnMsg.MIXLY_LCD_STAT_CLEAR = 'Clear';  ///
EnMsg.MIXLY_LCD_NOBACKLIGHT = 'NoBackLight'; ///
EnMsg.MIXLY_LCD_BACKLIGHT = 'BackLight'; ///
EnMsg.MIXLY_KS_1602LCD = 'IIC1602LCD';
EnMsg.MIXLY_KS_2004LCD = 'IIC2004LCD';
EnMsg.MIXLY_KS_MATRIX = '8*8 dot matrix';
EnMsg.MIXLY_KS_TM1637 = '4 digit 8-segment LED digital';
EnMsg.MIXLY_KS_ws = 'digit';
EnMsg.MIXLY_KS_begin = 'Display position';
EnMsg.MIXLY_KS_fill0 = 'add 0?';
EnMsg.MIXLY_KS_light = 'Brightness0~7';
EnMsg.MIXLY_KS_XY = 'Show or hide';
EnMsg.MIXLY_KS_L = 'left';
EnMsg.MIXLY_KS_R = 'right';
EnMsg.MIXLY_KS_MH = 'colon';
EnMsg.MIXLY_KS_one = 'print line1';
EnMsg.MIXLY_KS_two = 'print line2';
EnMsg.MIXLY_KS_three = 'print line3';
EnMsg.MIXLY_KS_four = 'print line4';
EnMsg.MIXLY_KS_clear = '             clear:';


EnMsg.MIXLY_KS_value = 'value';


EnMsg.MIXLY_KS_IR_E = 'Infrared Transmitter Module';
EnMsg.MIXLY_KS_IR_R = 'Infrared Receiver Module';
EnMsg.MIXLY_KS_W5100 = 'W5100 Ethernet Module';
EnMsg.KS_BLUETOOTH = 'Bluetooth Module';
EnMsg.MIXLY_KS_rec = 'Received';


//EnMsg.MIXLY_KS_kzsc = 'Control output';

EnMsg.MIXLY_KS_Count = 'count';

EnMsg.ks_test_V = 'voltage sensor';
EnMsg.ks_test_A = 'current sensor';
EnMsg.MIXLY_KS_FLAME_a = 'Flame sensor _ analog value';
EnMsg.joys_btn = 'Rocker button';
EnMsg.hwwd = 'Non-contact infrared sensor,Pin for SDA : A4 , SCL : A5';
EnMsg.color_sensor = 'color sensor';
EnMsg.RED_VAL = 'red value';
EnMsg.GREEN_VAL = 'green value';
EnMsg.BLUE_VAL = 'blue value';

EnMsg.matrix16and8_init = 'Matrix 16*8 init';
EnMsg.matrix16and8 = 'Matrix 16*8 custom';
EnMsg.matrix16and8_image = 'Matrix 16*8 picture';

EnMsg.Ultraviolet = 'Ultraviolet Sensor';
EnMsg.WaterTurbidity = 'WaterTurbidity';
EnMsg.C2H5O = 'harmful gas Sensor';
EnMsg.CeramicVibration = 'Piezo Vibration';
EnMsg.DustSensor = 'Dust Sensor';

EnMsg.MMA8452 = 'Accelerometer_MMA8452';
EnMsg.SHT31 = 'temperature and humidity sensor SHT31';

EnMsg.ks_neopixel = 'RGB neopixel';
EnMsg.ks_neopixel_show = 'neopixel show';

EnMsg.ks_TM1637_INIT = 'Four digit tube TM1637 init';
EnMsg.ks_4DIGITDISPLAY = 'Four digit tube TM1637 display';
EnMsg.ks_4DIGITDISPLAY_time = 'Four digit tube TM1637 display time';
EnMsg.ks_4DIGITDISPLAY_brightness = 'Four digit tube TM1637 brightness';
EnMsg.ks_4DIGITDISPLAY_clean = 'Four digit tube TM1637 clean';


EnMsg.ks_SPI_recv = 'Receive data Get register data';
EnMsg.ks_SPI_run = 'perform';
EnMsg.ks_SPI_read = 'The SPI retrieves register data from the machine';

const EnCatgories = {};

/***/ }),

/***/ "./src/language/zh-hans.js":
/*!*********************************!*\
  !*** ./src/language/zh-hans.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZhHansCatgories: () => (/* binding */ ZhHansCatgories),
/* harmony export */   ZhHansMsg: () => (/* binding */ ZhHansMsg)
/* harmony export */ });
const ZhHansMsg = {};

//科易互动机器人-坦克小车
ZhHansMsg.tank_front = '前进';
ZhHansMsg.tank_back = '后退';
ZhHansMsg.tank_left = '左边';
ZhHansMsg.tank_turn_left = '左转弯';
ZhHansMsg.tank_right = '右边';
ZhHansMsg.tank_turn_right = '右转弯';
ZhHansMsg.tank_stop = '停止';
ZhHansMsg.tank_speed = '速度值';

ZhHansMsg.tank_choose = '选择';
ZhHansMsg.left_light_sensor = '左光线传感器';
ZhHansMsg.right_light_sensor = '右光线传感器';

ZhHansMsg.tank_L_ir_a = '左红外避障';
ZhHansMsg.tank_R_ir_a = '右红外避障';
ZhHansMsg.tank_L_track = '左循迹传感器';
ZhHansMsg.tank_C_track = '中循迹传感器';
ZhHansMsg.tank_R_track = '右循迹传感器';

ZhHansMsg.tank_sr01 = '超声波';
ZhHansMsg.tank_buzzer = '蜂鸣器';
ZhHansMsg.tank_notone = '关闭蜂鸣器';
ZhHansMsg.tank_play_music = '播放乐曲';
ZhHansMsg.tank_Ode_to_joy = '欢乐颂';
ZhHansMsg.tank_birthday = '生日快乐';
ZhHansMsg.tank_fre = '频率';

ZhHansMsg.MIXLY_Tank_SERVO = '舵机';
ZhHansMsg.MIXLY_Tank_matrix = '点阵初始化';

ZhHansMsg.tank_ir_R = '红外接收模块';
ZhHansMsg.tank_ir_RD = '红外接收数据';
ZhHansMsg.tank_Bluetooth = '蓝牙BLE模块';
ZhHansMsg.tank_Bluetooth_rec = '蓝牙接收数据';

ZhHansMsg.tank_on_off = '电平为';
ZhHansMsg.tank_high = '高';
ZhHansMsg.tank_low = '低';

//小乌龟车
ZhHansMsg.turtle_front = '前进';
ZhHansMsg.turtle_back = '后退';
ZhHansMsg.turtle_left = '左边';
ZhHansMsg.turtle_turn_left = '左转弯';
ZhHansMsg.turtle_right = '右边';
ZhHansMsg.turtle_turn_right = '右转弯';
ZhHansMsg.turtle_stop = '停止';
ZhHansMsg.turtle_speed = '速度值';

ZhHansMsg.turtle_L_ir_a = '左红外避障';
ZhHansMsg.turtle_R_ir_a = '右红外避障';
ZhHansMsg.turtle_L_track = '左循迹传感器';
ZhHansMsg.turtle_C_track = '中循迹传感器';
ZhHansMsg.turtle_R_track = '右循迹传感器';

ZhHansMsg.turtle_sr01 = '超声波';
ZhHansMsg.turtle_buzzer = '蜂鸣器';
ZhHansMsg.turtle_notone = '关闭蜂鸣器';
ZhHansMsg.turtle_play_music = '播放乐曲';
ZhHansMsg.turtle_Ode_to_joy = '欢乐颂';
ZhHansMsg.turtle_birthday = '生日快乐';
ZhHansMsg.turtle_fre = '频率';

ZhHansMsg.MIXLY_turtle_SERVO = '舵机';
ZhHansMsg.MIXLY_turtle_matrix = '点阵初始化';

ZhHansMsg.turtle_ir_R = '红外接收模块';
ZhHansMsg.turtle_ir_RD = '红外接收数据';
ZhHansMsg.turtle_Bluetooth = '蓝牙BLE模块';
ZhHansMsg.turtle_Bluetooth_rec = '蓝牙接收数据';

ZhHansMsg.turtle_on_off = '电平为';
ZhHansMsg.turtle_high = '高';
ZhHansMsg.turtle_low = '低';

//2wd桌面小车
ZhHansMsg.Desk_on_off = '电平为';

ZhHansMsg.Desk_front = '前进';
ZhHansMsg.Desk_back = '后退';
ZhHansMsg.Desk_left = '左边';
ZhHansMsg.Desk_turn_left = '左转弯';
ZhHansMsg.Desk_right = '右边';
ZhHansMsg.Desk_turn_right = '右转弯';
ZhHansMsg.Desk_stop = '停止';
ZhHansMsg.Desk_speed = '速度值';

ZhHansMsg.Desk_L_ir_a = '左红外避障';
ZhHansMsg.Desk_R_ir_a = '右红外避障';
ZhHansMsg.Desk_L_track = '左循迹传感器';
ZhHansMsg.Desk_C_track = '中循迹传感器';
ZhHansMsg.Desk_R_track = '右循迹传感器';

ZhHansMsg.Desk_sr01 = '超声波';
ZhHansMsg.Desk_buzzer = '蜂鸣器';
ZhHansMsg.Desk_notone = '关闭蜂鸣器';
ZhHansMsg.Desk_play_music = '播放乐曲';
ZhHansMsg.Desk_Ode_to_joy = '欢乐颂';
ZhHansMsg.Desk_birthday = '生日快乐';
ZhHansMsg.Desk_fre = '频率';
ZhHansMsg.Desk_ir_R = '红外接收模块';
ZhHansMsg.Desk_ir_RD = '红外接收数据';
ZhHansMsg.Desk_Bluetooth = '蓝牙BLE模块';
ZhHansMsg.Desk_Bluetooth_rec = '蓝牙接收数据';

//4wd小车
ZhHansMsg.ks4wd_front = '前进';
ZhHansMsg.ks4wd_back = '后退';
ZhHansMsg.ks4wd_left = '左边';
ZhHansMsg.ks4wd_turn_left = '左转弯';
ZhHansMsg.ks4wd_right = '右边';
ZhHansMsg.ks4wd_turn_right = '右转弯';
ZhHansMsg.ks4wd_stop = '停止';
ZhHansMsg.ks4wd_speed = '速度值';

ZhHansMsg.ks4wd_choose = '选择';

ZhHansMsg.ks4wd_L_ir_a = '左红外避障';
ZhHansMsg.ks4wd_R_ir_a = '右红外避障';
ZhHansMsg.ks4wd_L_track = '左循迹传感器';
ZhHansMsg.ks4wd_C_track = '中循迹传感器';
ZhHansMsg.ks4wd_R_track = '右循迹传感器';

ZhHansMsg.ks4wd_sr01 = '超声波';
ZhHansMsg.ks4wd_buzzer = '蜂鸣器';
ZhHansMsg.ks4wd_notone = '关闭蜂鸣器';
ZhHansMsg.ks4wd_play_music = '播放乐曲';
ZhHansMsg.ks4wd_Ode_to_joy = '欢乐颂';
ZhHansMsg.ks4wd_birthday = '生日快乐';
ZhHansMsg.ks4wd_fre = '频率';

ZhHansMsg.MIXLY_ks4wd_SERVO = '舵机';
ZhHansMsg.MIXLY_ks4wd_matrix = '点阵初始化';

ZhHansMsg.ks4wd_ir_R = '红外接收模块';
ZhHansMsg.ks4wd_ir_RD = '红外接收数据';
ZhHansMsg.ks4wd_Bluetooth = '蓝牙BLE模块';
ZhHansMsg.ks4wd_Bluetooth_rec = '蓝牙接收数据';

ZhHansMsg.ks4wd_on_off = '电平为';
ZhHansMsg.ks4wd_high = '高';
ZhHansMsg.ks4wd_low = '低';

ZhHansMsg.ksCar_forward = '前进';
ZhHansMsg.ksCar_backward = '后退';
ZhHansMsg.ksCar_left = '左旋转';
ZhHansMsg.ksCar_right = '右旋转';

//OTTO_frog
ZhHansMsg.otto_init = '初始化';
ZhHansMsg.otto_YL = '调整左腿';
ZhHansMsg.otto_YR = '调整右腿';
ZhHansMsg.otto_RL = '调整左脚';
ZhHansMsg.otto_RR = '调整右脚';
ZhHansMsg.otto_steps = '步数';
ZhHansMsg.otto_speed = '速度';
ZhHansMsg.otto_left_moonwalk = '左太空步';
ZhHansMsg.otto_right_moonwalk = '右太空步';
ZhHansMsg.otto_left_galop = '左快步';
ZhHansMsg.otto_right_galop = '右快步';
ZhHansMsg.otto_drunk = '摆动';
ZhHansMsg.otto_noGravity = '失重状态中';
ZhHansMsg.otto_crusaito = '滑步';
ZhHansMsg.otto_friction_pace = '摩擦摩擦';
ZhHansMsg.otto_jump = '跳跳跳。。。';
ZhHansMsg.otto_flapping = '摇摆运动';
ZhHansMsg.otto_swing = '游泳姿势';
ZhHansMsg.otto_goingUp = '慢慢踮起脚';
ZhHansMsg.otto_front = '前进';
ZhHansMsg.otto_back = '后退';
ZhHansMsg.otto_left = '左旋转';
ZhHansMsg.otto_turn_left = '左转弯';
ZhHansMsg.otto_right = '右旋转';
ZhHansMsg.otto_turn_right = '右转弯';
ZhHansMsg.otto_stop = '保持站立';
ZhHansMsg.otto_speed = '速度值';
ZhHansMsg.otto_servo = '舵机';
ZhHansMsg.otto_angle = '角度';
ZhHansMsg.otto_sr01 = '超声波';
ZhHansMsg.otto_Bluetooth = '蓝牙BLE模块';
ZhHansMsg.otto_Bluetooth_rec = '蓝牙接收数据';


ZhHansMsg.Kids_anologWrite = 'PWM模拟输出';
ZhHansMsg.Kids_value = '赋值为';

ZhHansMsg.Kids_iic = '管脚：SDA# A4, SCL# A5';
ZhHansMsg.Kids_rot = '按钮管脚';
ZhHansMsg.Kids_rot_count = '计数变量';
ZhHansMsg.Kids_bits = '字符串';
ZhHansMsg.Kids_pin = '管脚';

ZhHansMsg.Kids_iic_pin = '管脚SDA:A4,SCL:A5';
ZhHansMsg.Kids_lcd_p = '液晶显示屏';
ZhHansMsg.Kids_shilihua = '实例化名称';
ZhHansMsg.Kids_size = '字体大小';
ZhHansMsg.Kids_printcount = '显示数字';

ZhHansMsg.ke_string = '显示字符';

ZhHansMsg.Kids_lcd_left = '液晶显示屏往左滚动';
ZhHansMsg.Kids_lcd_right = '液晶显示屏往右滚动';



ZhHansMsg.Kids_ON = '高';
ZhHansMsg.Kids_OFF = '低';
ZhHansMsg.Kids_anologWrite = 'PWM模拟输出';

ZhHansMsg.MIXLY_SETUP = '初始化';  ////////////////
ZhHansMsg.MIXLY_LCD_ADDRESS = '设备地址'; /////////
ZhHansMsg.MIXLY_LCD_PRINT1 = '打印第一行';  /////////
ZhHansMsg.MIXLY_LCD_PRINT2 = '打印第二行'; ///////////
ZhHansMsg.MIXLY_LCD_ROW = '在第'; /////
ZhHansMsg.MIXLY_LCD_COLUMN = '行第'; /////////
ZhHansMsg.MIXLY_LCD_PRINT = '列打印'; ////
ZhHansMsg.MIXLY_LCD_STAT_ON = '开';  /////
ZhHansMsg.MIXLY_LCD_STAT_OFF = '关';  /////
ZhHansMsg.MIXLY_LCD_STAT_CURSOR = '有光标';  ////
ZhHansMsg.MIXLY_LCD_STAT_NOCURSOR = '无光标';  ////
ZhHansMsg.MIXLY_LCD_STAT_BLINK = '闪烁';  ////
ZhHansMsg.MIXLY_LCD_STAT_NOBLINK = '不闪烁'; ///
ZhHansMsg.MIXLY_LCD_STAT_CLEAR = '清屏';  ///
ZhHansMsg.MIXLY_LCD_NOBACKLIGHT = '关闭背光'; ///
ZhHansMsg.MIXLY_LCD_BACKLIGHT = '打开背光'; ///



//ZhHansMsg.MIXLY_ke_kzsc = '控制输出';

ZhHansMsg.MIXLY_ke_Count = '灯号';

ZhHansMsg.MIXLY_ke_YEAR = '年';
ZhHansMsg.MIXLY_ke_MONTH = '月';
ZhHansMsg.MIXLY_ke_DAY = '日';
ZhHansMsg.MIXLY_ke_HOUR = '时';
ZhHansMsg.MIXLY_ke_MINUTE = '分';
ZhHansMsg.MIXLY_ke_SECOND = '秒';
ZhHansMsg.MIXLY_ke_WEEK = '周';

ZhHansMsg.MIXLY_ke_angle = '角度';

ZhHansMsg.kids_Ode_to_joy = "圣诞歌";
ZhHansMsg.kids_birthday = "生日快乐";

ZhHansMsg.kids_tone = "音调";
ZhHansMsg.kids_beat = "节拍";
ZhHansMsg.kids_play_tone = "播放乐曲";
ZhHansMsg.kids_notone = "关闭蜂鸣器";

ZhHansMsg.kids_ADkey = "7位按键模块";


//keyestudio传感器 、、、、、、、、、、、、、、、、、、、、、、、、、、、\\\\\\\\\\\

ZhHansMsg.KS_LED3wd = 'LED 3W';
ZhHansMsg.KS_LED_W = '白色LED';
ZhHansMsg.KS_LED_R = '红色LED';
ZhHansMsg.KS_LED_G = '绿色LED';
ZhHansMsg.KS_LED_B = '蓝色LED';
ZhHansMsg.KS_LED_Y = '黄色LED';
ZhHansMsg.MIXLY_KS_BUZZER1 = '有源蜂鸣器';
ZhHansMsg.MIXLY_KS_BUZZER2 = '无源蜂鸣器';
ZhHansMsg.ks_tone = '音调';
ZhHansMsg.ks_beat = '节拍';
ZhHansMsg.ks_music = '播放乐曲';
ZhHansMsg.ks_Ode_to_joy = '圣诞歌';
ZhHansMsg.ks_birthday = '生日快乐';
ZhHansMsg.ks_tetris = '俄罗斯方块';
ZhHansMsg.ks_star_war = '星球大战';
ZhHansMsg.ks_super_mario = '超级玛丽';
ZhHansMsg.ks_christmas = '圣诞歌';
ZhHansMsg.ks_notone1 = '关闭蜂鸣器';

ZhHansMsg.ks_MQ_d = 'MQ-2可燃气体传感器_数字';
ZhHansMsg.ks_MQ_a = 'MQ-2可燃气体传感器_模拟';

ZhHansMsg.MIXLY_KS_RELAY = '继电器';
ZhHansMsg.MIXLY_KS_MOTOR = '小风扇';

ZhHansMsg.Ks_ON = '高';
ZhHansMsg.Ks_OFF = '低';

ZhHansMsg.MIXLY_KS_SERVO = '舵机';
ZhHansMsg.MIXLY_KS_2812RGB = '2812RGB模块';

ZhHansMsg.MIXLY_KS_IR_G = '人体红外传感器';
ZhHansMsg.MIXLY_KS_FLAME = '火焰传感器_数字值';
ZhHansMsg.MIXLY_KS_FLAME_a = '火焰传感器_模拟值';
ZhHansMsg.MIXLY_KS_HALL = '霍尔传感器';
ZhHansMsg.MIXLY_KS_CRASH = '碰撞传感器';
ZhHansMsg.MIXLY_KS_BUTTON = '按键';
ZhHansMsg.MIXLY_KS_TUOCH = '电容触摸';
ZhHansMsg.MIXLY_KS_KNOCK = '敲击模块';
ZhHansMsg.MIXLY_KS_TILT = '倾斜模块';
ZhHansMsg.MIXLY_KS_SHAKE = '振动模块';
ZhHansMsg.MIXLY_KS_REED_S = '干簧管模块';
ZhHansMsg.MIXLY_KS_TRACK = '循迹模块';
ZhHansMsg.MIXLY_KS_AVOID = '避障模块';
ZhHansMsg.MIXLY_KS_LIGHT_B = '光折断模块';

ZhHansMsg.MIXLY_KS_ANALOG_T = '模拟温度传感器';
ZhHansMsg.MIXLY_KS_SOUND = '声音传感器';
ZhHansMsg.KS_LIGHT = '光敏传感器';
ZhHansMsg.MIXLY_KS_WATER = '水位传感器';
ZhHansMsg.KS_SOIL = '土壤湿度传感器';
ZhHansMsg.MIXLY_KS_POTENTIOMETER = '旋转电位器';
ZhHansMsg.MIXLY_KS_LM35 = 'LM35温度传感器';
ZhHansMsg.MIXLY_KS_SLIDE_POTENTIOMETER = '滑动电位器';
ZhHansMsg.MIXLY_KS_TEMT6000 = 'TEMT6000环境光';
ZhHansMsg.KS_STEAM = '水滴传感器';
ZhHansMsg.MIXLY_KS_FILM_P = '薄膜压力传感器';
ZhHansMsg.MIXLY_KS_JOYSTICK = '遥杆模块';
ZhHansMsg.MIXLY_KS_SMOKE = '烟雾传感器';
ZhHansMsg.MIXLY_KS_ALCOHOL = '酒精传感器';
ZhHansMsg.MIXLY_KS_MQ135 = 'MQ135空气质量';

ZhHansMsg.MIXLY_KS_18B20 = '18B20温度模块';
ZhHansMsg.MIXLY_KS_RT = '温度';

ZhHansMsg.MIXLY_KS_DHT11 = '温湿度模块';

ZhHansMsg.MIXLY_KS_BMP180 = 'BMP180高度计模块';
ZhHansMsg.MIXLY_KS_T = '温度';
ZhHansMsg.MIXLY_KS_QY = '大气压';
ZhHansMsg.MIXLY_KS_H = '高度';

ZhHansMsg.KS_SR01 = '超声波模块';
ZhHansMsg.MIXLY_KS_3231 = 'DS3231时钟';


ZhHansMsg.MIXLY_KS_YEAR = '年';
ZhHansMsg.MIXLY_KS_MONTH = '月';
ZhHansMsg.MIXLY_KS_DAY = '天';
ZhHansMsg.MIXLY_KS_TEXT = '周';
ZhHansMsg.MIXLY_KS_HOUR = '时';
ZhHansMsg.MIXLY_KS_MINUTE = '分';
ZhHansMsg.MIXLY_KS_SECOND = '秒';
ZhHansMsg.MIXLY_KS_GET = '获取DS3231时钟时间';


ZhHansMsg.MIXLY_KS_OLED = 'OLED模块';

ZhHansMsg.MIXLY_SETUP = '初始化';  ////////////////
ZhHansMsg.MIXLY_LCD_ADDRESS = '设备地址'; /////////
ZhHansMsg.MIXLY_LCD_PRINT1 = '打印第一行';  /////////
ZhHansMsg.MIXLY_LCD_PRINT2 = '打印第二行'; ///////////
ZhHansMsg.MIXLY_LCD_ROW = '在第'; /////
ZhHansMsg.MIXLY_LCD_COLUMN = '行第'; /////////
ZhHansMsg.MIXLY_LCD_PRINT = '列打印'; ////
ZhHansMsg.MIXLY_LCD_STAT_ON = '开';  /////
ZhHansMsg.MIXLY_LCD_STAT_OFF = '关';  /////
ZhHansMsg.MIXLY_LCD_STAT_CURSOR = '有光标';  ////
ZhHansMsg.MIXLY_LCD_STAT_NOCURSOR = '无光标';  ////
ZhHansMsg.MIXLY_LCD_STAT_BLINK = '闪烁';  ////
ZhHansMsg.MIXLY_LCD_STAT_NOBLINK = '不闪烁'; ///
ZhHansMsg.MIXLY_LCD_STAT_CLEAR = '清屏';  ///
ZhHansMsg.MIXLY_LCD_NOBACKLIGHT = '关闭背光'; ///
ZhHansMsg.MIXLY_LCD_BACKLIGHT = '打开背光'; ///
ZhHansMsg.MIXLY_DHT11_H = '获取湿度';    /////////////
ZhHansMsg.MIXLY_DHT11_T = '获取温度';     ////////////
ZhHansMsg.MIXLY_DHT11_H = '获取湿度';    /////////////
ZhHansMsg.MIXLY_DHT11_T = '获取温度';     ////////////
ZhHansMsg.KS_ADXL345 = '三轴加速度计传感器_ADXL345';
ZhHansMsg.MIXLY_ADXL345_X = 'X轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_Y = 'Y轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_Z = 'Z轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_XA = 'X轴角度';  ///
ZhHansMsg.MIXLY_ADXL345_YA = 'Y轴角度';  ///

ZhHansMsg.MIXLY_KS_1602LCD = 'IIC1602LCD';
ZhHansMsg.MIXLY_KS_2004LCD = 'IIC2004LCD';

ZhHansMsg.Ks_iic_pin = '管脚SDA:A4,SCL:A5';
ZhHansMsg.Ks_lcd_p = '液晶显示屏';
ZhHansMsg.Ks_shilihua = '实例化名称';
ZhHansMsg.Ks_size = '字体大小';
ZhHansMsg.Ks_printcount = '显示数字';

ZhHansMsg.Ks_string = '显示字符';

ZhHansMsg.Ks_lcd_left = '液晶显示屏往左滚动';
ZhHansMsg.Ks_lcd_right = '液晶显示屏往右滚动';

ZhHansMsg.MIXLY_KS_MATRIX = '8*8点阵';
ZhHansMsg.MIXLY_KS_TM1637 = '4位8段数码管';
ZhHansMsg.MIXLY_KS_ws = '位数';
ZhHansMsg.MIXLY_KS_begin = '显示的位置';
ZhHansMsg.MIXLY_KS_fill0 = '是否补充0';
ZhHansMsg.MIXLY_KS_light = '亮度0~7';
ZhHansMsg.MIXLY_KS_XY = '显或隐';
ZhHansMsg.MIXLY_KS_L = '左边';
ZhHansMsg.MIXLY_KS_R = '右边';
ZhHansMsg.MIXLY_KS_MH = '冒号';
ZhHansMsg.MIXLY_KS_one = '第一行';
ZhHansMsg.MIXLY_KS_two = '第二行';
ZhHansMsg.MIXLY_KS_three = '第三行';
ZhHansMsg.MIXLY_KS_four = '第四行';
ZhHansMsg.MIXLY_KS_clear = '             是否清屏:';

ZhHansMsg.MIXLY_KS_value = '数值';

ZhHansMsg.MIXLY_KS_IR_E = '红外发射模块';
ZhHansMsg.MIXLY_KS_IR_R = '红外接收模块';
ZhHansMsg.MIXLY_KS_W5100 = 'W5100以太网模块';
ZhHansMsg.KS_BLUETOOTH = '蓝牙模块';
ZhHansMsg.MIXLY_KS_rec = '接收到的信号';

ZhHansMsg.MIXLY_KS_kzsc = '控制输出';

ZhHansMsg.MIXLY_KS_Count = '灯号';

ZhHansMsg.ks_test_V = '电压传感器';
ZhHansMsg.ks_test_A = '电流传感器';

ZhHansMsg.MIXLY_KS_FLAME_a = '火焰传感器_模拟值';
ZhHansMsg.joys_btn = '摇杆按钮';
ZhHansMsg.hwwd = '非接触式红外传感器,引脚为 SDA : A4 , SCL : A5';
ZhHansMsg.color_sensor = '颜色传感器';
ZhHansMsg.RED_VAL = '红色值';
ZhHansMsg.GREEN_VAL = '绿色值';
ZhHansMsg.BLUE_VAL = '蓝色值';

ZhHansMsg.matrix16and8_init = '点阵16*8初始化';
ZhHansMsg.matrix16and8 = '点阵16*8自定义图';
ZhHansMsg.matrix16and8_image = '点阵16*8图';

ZhHansMsg.Ultraviolet = '紫外线传感器';
ZhHansMsg.WaterTurbidity = '水浑浊度';
ZhHansMsg.C2H5O = '有害气体传感器';
ZhHansMsg.CeramicVibration = '压电陶瓷震动传感器';
ZhHansMsg.DustSensor = '粉尘传感器';

ZhHansMsg.MMA8452 = '三轴加速度计_MMA8452';
ZhHansMsg.SHT31 = '温湿度传感器_SHT31';

ZhHansMsg.ks_neopixel = 'RGB灯 neopixel';
ZhHansMsg.ks_neopixel_show = 'neopixel show';
ZhHansMsg.ks_TM1637_INIT = '四位数码管_TM1637 初始化';
ZhHansMsg.ks_4DIGITDISPLAY = '四位数码管_TM1637 显示';
ZhHansMsg.ks_4DIGITDISPLAY_time = '四位数码管_TM1637 显示时间';
ZhHansMsg.ks_4DIGITDISPLAY_brightness = '四位数码管_TM1637 亮度';
ZhHansMsg.ks_4DIGITDISPLAY_clean = '四位数码管_TM1637 清屏';


ZhHansMsg.ks_SPI_recv = '接收到数据 获取寄存器数据';
ZhHansMsg.ks_SPI_run = '执行';
ZhHansMsg.ks_SPI_read = 'SPI从机获取寄存器数据';

const ZhHansCatgories = {};

/***/ }),

/***/ "./src/language/zh-hant.js":
/*!*********************************!*\
  !*** ./src/language/zh-hant.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZhHantCatgories: () => (/* binding */ ZhHantCatgories),
/* harmony export */   ZhHantMsg: () => (/* binding */ ZhHantMsg)
/* harmony export */ });
const ZhHantMsg = {};

//科易互动机器人-坦克小车
ZhHantMsg.tank_front = '前进';
ZhHantMsg.tank_back = '后退';
ZhHantMsg.tank_left = '左边';
ZhHantMsg.tank_turn_left = '左转弯';
ZhHantMsg.tank_right = '右边';
ZhHantMsg.tank_turn_right = '右转弯';
ZhHantMsg.tank_stop = '停止';
ZhHantMsg.tank_speed = '速度值';
ZhHantMsg.left_light_sensor = '左光线传感器';
ZhHantMsg.right_light_sensor = '右光线传感器';
ZhHantMsg.tank_choose = '选择';

ZhHantMsg.tank_L_ir_a = '左红外避障';
ZhHantMsg.tank_R_ir_a = '右红外避障';
ZhHantMsg.tank_L_track = '左循迹传感器';
ZhHantMsg.tank_C_track = '中循迹传感器';
ZhHantMsg.tank_R_track = '右循迹传感器';

ZhHantMsg.tank_sr01 = '超声波';
ZhHantMsg.tank_buzzer = '蜂鸣器';
ZhHantMsg.tank_notone = '关闭蜂鸣器';
ZhHantMsg.tank_play_music = '播放乐曲';
ZhHantMsg.tank_Ode_to_joy = '欢乐颂';
ZhHantMsg.tank_birthday = '生日快乐';
ZhHantMsg.tank_fre = '频率';

ZhHantMsg.MIXLY_Tank_SERVO = '舵机';
ZhHantMsg.MIXLY_Tank_matrix = '点阵初始化';
ZhHantMsg.tank_ir_R = '红外接收模块';
ZhHantMsg.tank_ir_RD = '红外接收数据';
ZhHantMsg.tank_Bluetooth = '蓝牙BLE模块';
ZhHantMsg.tank_Bluetooth_rec = '蓝牙接收数据';

ZhHantMsg.tank_on_off = '电平为';
ZhHantMsg.tank_high = '高';
ZhHantMsg.tank_low = '低';

//小乌龟车
ZhHantMsg.turtle_front = '前进';
ZhHantMsg.turtle_back = '后退';
ZhHantMsg.turtle_left = '左边';
ZhHantMsg.turtle_turn_left = '左转弯';
ZhHantMsg.turtle_right = '右边';
ZhHantMsg.turtle_turn_right = '右转弯';
ZhHantMsg.turtle_stop = '停止';
ZhHantMsg.turtle_speed = '速度值';

ZhHantMsg.turtle_L_ir_a = '左红外避障';
ZhHantMsg.turtle_R_ir_a = '右红外避障';
ZhHantMsg.turtle_L_track = '左循迹传感器';
ZhHantMsg.turtle_C_track = '中循迹传感器';
ZhHantMsg.turtle_R_track = '右循迹传感器';

ZhHantMsg.turtle_sr01 = '超声波';
ZhHantMsg.turtle_buzzer = '蜂鸣器';
ZhHantMsg.turtle_notone = '关闭蜂鸣器';
ZhHantMsg.turtle_play_music = '播放乐曲';
ZhHantMsg.turtle_Ode_to_joy = '欢乐颂';
ZhHantMsg.turtle_birthday = '生日快乐';
ZhHantMsg.turtle_fre = '频率';

ZhHantMsg.MIXLY_turtle_SERVO = '舵机';
ZhHantMsg.MIXLY_turtle_matrix = '点阵初始化';

ZhHantMsg.turtle_ir_R = '红外接收模块';
ZhHantMsg.turtle_ir_RD = '红外接收数据';
ZhHantMsg.turtle_Bluetooth = '蓝牙BLE模块';
ZhHantMsg.turtle_Bluetooth_rec = '蓝牙接收数据';

ZhHantMsg.turtle_on_off = '电平为';
ZhHantMsg.turtle_high = '高';
ZhHantMsg.turtle_low = '低';

//2wd桌面小车
ZhHantMsg.Desk_on_off = '电平为';

ZhHantMsg.Desk_front = '前进';
ZhHantMsg.Desk_back = '后退';
ZhHantMsg.Desk_left = '左旋转';
ZhHantMsg.Desk_turn_left = '左转弯';
ZhHantMsg.Desk_right = '右旋转';
ZhHantMsg.Desk_turn_right = '右转弯';
ZhHantMsg.Desk_stop = '停止';
ZhHantMsg.Desk_speed = '速度值';

ZhHantMsg.Desk_L_ir_a = '左红外避障';
ZhHantMsg.Desk_R_ir_a = '右红外避障';
ZhHantMsg.Desk_L_track = '左循迹传感器';
ZhHantMsg.Desk_C_track = '中循迹传感器';
ZhHantMsg.Desk_R_track = '右循迹传感器';

ZhHantMsg.Desk_sr01 = '超声波';
ZhHantMsg.Desk_buzzer = '蜂鸣器';
ZhHantMsg.Desk_notone = '关闭蜂鸣器';
ZhHantMsg.Desk_play_music = '播放乐曲';
ZhHantMsg.Desk_Ode_to_joy = '欢乐颂';
ZhHantMsg.Desk_birthday = '生日快乐';
ZhHantMsg.Desk_fre = '频率';
ZhHantMsg.Desk_ir_R = '红外接收模块';
ZhHantMsg.Desk_ir_RD = '红外接收数据';
ZhHantMsg.Desk_Bluetooth = '蓝牙BLE模块';
ZhHantMsg.Desk_Bluetooth_rec = '蓝牙接收数据';

//4wd小车
ZhHantMsg.ks4wd_front = '前进';
ZhHantMsg.ks4wd_back = '后退';
ZhHantMsg.ks4wd_left = '左边';
ZhHantMsg.ks4wd_turn_left = '左转弯';
ZhHantMsg.ks4wd_right = '右边';
ZhHantMsg.ks4wd_turn_right = '右转弯';
ZhHantMsg.ks4wd_stop = '停止';
ZhHantMsg.ks4wd_speed = '速度值';

ZhHantMsg.ks4wd_choose = '选择';

ZhHantMsg.ks4wd_L_ir_a = '左红外避障';
ZhHantMsg.ks4wd_R_ir_a = '右红外避障';
ZhHantMsg.ks4wd_L_track = '左循迹传感器';
ZhHantMsg.ks4wd_C_track = '中循迹传感器';
ZhHantMsg.ks4wd_R_track = '右循迹传感器';

ZhHantMsg.ks4wd_sr01 = '超声波';
ZhHantMsg.ks4wd_buzzer = '蜂鸣器';
ZhHantMsg.ks4wd_notone = '关闭蜂鸣器';
ZhHantMsg.ks4wd_play_music = '播放乐曲';
ZhHantMsg.ks4wd_Ode_to_joy = '欢乐颂';
ZhHantMsg.ks4wd_birthday = '生日快乐';
ZhHantMsg.ks4wd_fre = '频率';

ZhHantMsg.MIXLY_ks4wd_SERVO = '舵机';
ZhHantMsg.MIXLY_ks4wd_matrix = '点阵初始化';

ZhHantMsg.ks4wd_ir_R = '红外接收模块';
ZhHantMsg.ks4wd_ir_RD = '红外接收数据';
ZhHantMsg.ks4wd_Bluetooth = '蓝牙BLE模块';
ZhHantMsg.ks4wd_Bluetooth_rec = '蓝牙接收数据';

ZhHantMsg.ks4wd_on_off = '电平为';
ZhHantMsg.ks4wd_high = '高';
ZhHantMsg.ks4wd_low = '低';

ZhHantMsg.ksCar_forward = '前进';
ZhHantMsg.ksCar_backward = '后退';
ZhHantMsg.ksCar_left = '左旋转';
ZhHantMsg.ksCar_right = '右旋转';


//otto_FROG
ZhHantMsg.otto_init = '初始化';
ZhHantMsg.otto_YL = '调整左腿';
ZhHantMsg.otto_YR = '调整右腿';
ZhHantMsg.otto_RL = '调整左脚';
ZhHantMsg.otto_RR = '调整右脚';
ZhHantMsg.otto_steps = '步数';
ZhHantMsg.otto_speed = '速度';
ZhHantMsg.otto_left_moonwalk = '左太空步';
ZhHantMsg.otto_right_moonwalk = '右太空步';
ZhHantMsg.otto_left_galop = '左快步';
ZhHantMsg.otto_right_galop = '右快步';
ZhHantMsg.otto_drunk = '摆动';
ZhHantMsg.otto_noGravity = '失重状态中';
ZhHantMsg.otto_crusaito = '滑步';
ZhHantMsg.otto_friction_pace = '摩擦摩擦';
ZhHantMsg.otto_jump = '跳跳跳。。。';
ZhHantMsg.otto_flapping = '摇摆运动';
ZhHantMsg.otto_swing = '游泳姿势';
ZhHantMsg.otto_goingUp = '慢慢踮起脚';
ZhHantMsg.otto_front = '前进';
ZhHantMsg.otto_back = '后退';
ZhHantMsg.otto_left = '左旋转';
ZhHantMsg.otto_turn_left = '左转弯';
ZhHantMsg.otto_right = '右旋转';
ZhHantMsg.otto_turn_right = '右转弯';
ZhHantMsg.otto_stop = '保持站立';
ZhHantMsg.otto_speed = '速度值';
ZhHantMsg.otto_servo = '舵机';
ZhHantMsg.otto_angle = '角度';
ZhHantMsg.otto_sr01 = '超声波';
ZhHantMsg.otto_Bluetooth = '蓝牙BLE模块';
ZhHantMsg.otto_Bluetooth_rec = '蓝牙接收数据';


//keyes brick
ZhHantMsg.ke_red_led = '红色led灯';
ZhHantMsg.ke_dual_led = '双色灯';
ZhHantMsg.ke_yellow_led = '黄色LED灯';
ZhHantMsg.ke_white_led = '白色LED灯';
ZhHantMsg.ke_3W = '3W_LED灯';
ZhHantMsg.ke_led_green = '绿色灯';


ZhHantMsg.ke_msgb_led1 = '魔术光杯_LED';
ZhHantMsg.ke_msgb_sor1 = '魔术光杯传感器';
ZhHantMsg.ke_shouzhi1 = '手指测心率';
ZhHantMsg.ke_jg1 = '激光';


ZhHantMsg.MIXLY_ke_QCD = '七彩led灯';
ZhHantMsg.MIXLY_ke_RGB = 'RGB';

ZhHantMsg.Kids_anologWrite = 'PWM模拟输出';
ZhHantMsg.Kids_value = '赋值为';

ZhHantMsg.Kids_iic = '管脚：SDA# A4, SCL# A5';
ZhHantMsg.Kids_rot = '按钮管脚';
ZhHantMsg.Kids_rot_count = '计数变量';
ZhHantMsg.Kids_bits = '字符串';
ZhHantMsg.Kids_pin = '管脚';

ZhHantMsg.Kids_iic_pin = '管脚SDA:A4,SCL:A5';
ZhHantMsg.Kids_lcd_p = '液晶显示屏';
ZhHantMsg.Kids_shilihua = '实例化名称';
ZhHantMsg.Kids_size = '字体大小';
ZhHantMsg.Kids_printcount = '显示数字';

ZhHantMsg.ke_string = '显示字符';

ZhHantMsg.Kids_lcd_left = '液晶显示屏往左滚动';
ZhHantMsg.Kids_lcd_right = '液晶显示屏往右滚动';

ZhHantMsg.ke_TM1637 = '4位8段数码管';
ZhHantMsg.ke_ws = '位数';
ZhHantMsg.ke_begin = '显示的位置';
ZhHantMsg.ke_fill0 = '是否补充0';
ZhHantMsg.ke_light = '亮度0~7';
ZhHantMsg.ke_XY = '显或隐';
ZhHantMsg.ke_L = '左边';
ZhHantMsg.ke_R = '右边';
ZhHantMsg.ke_MH = '冒号';
ZhHantMsg.ke_value = '数值';


ZhHantMsg.ke_oled_init = 'OLED初始化';
ZhHantMsg.ke_oled_piexl = 'OLED_画点的坐标';
ZhHantMsg.ke_oled_x = '列';
ZhHantMsg.ke_oled_y = '行';
ZhHantMsg.ke_oled_cong = '从';
ZhHantMsg.ke_oled_dao = '到';
ZhHantMsg.ke_oled_kai = '起始位';
ZhHantMsg.ke_oled_kuan = '宽';
ZhHantMsg.ke_oled_chang = '长';
ZhHantMsg.ke_oled_angle1 = '角度1为';
ZhHantMsg.ke_oled_angle2 = '角度2为';
ZhHantMsg.ke_oled_angle3 = '角度3为';

ZhHantMsg.ke_oled_line = 'OLED_画两点连线';
ZhHantMsg.ke_oled_rect = 'OLED_画空心矩形';
ZhHantMsg.ke_oled_fil_lrect = 'OLED_画实心矩形';
ZhHantMsg.ke_oled_r_rect = 'OLED_画倒圆角的空心矩形';
ZhHantMsg.ke_oled_r_fill_rect = 'OLED_画倒圆角的实心矩形';
ZhHantMsg.ke_oled_circle = 'OLED_画空心圆形  圆心坐标';
ZhHantMsg.ke_oled_circle_radius = '圆半径';
ZhHantMsg.ke_oled_radius = '圆角半径';
ZhHantMsg.ke_oled_fill_circle = 'OLED_画实心的圆形  圆心坐标';
ZhHantMsg.ke_oled_triangle = 'OLED_画空心三角形';
ZhHantMsg.ke_oled_fill_triangle = 'OLED_画实心三角形';
ZhHantMsg.ke_oled_string1 = 'OLED_显示字符串或数字';
ZhHantMsg.ke_oled_weizhi = '显示的位置';
ZhHantMsg.ke_oled_print = '显示';
ZhHantMsg.ke_oled_clear = 'OLED_清屏';




ZhHantMsg.Kids_ON = '高';
ZhHantMsg.Kids_OFF = '低';
ZhHantMsg.Kids_anologWrite = 'PWM模拟输出';



ZhHantMsg.MIXLY_ke_BUZZER1 = '有源蜂鸣器';
ZhHantMsg.MIXLY_ke_BUZZER2 = '无源蜂鸣器';
ZhHantMsg.MIXLY_ke_RELAY = '继电器';
ZhHantMsg.MIXLY_ke_MOTOR = '小风扇';
ZhHantMsg.MIXLY_ke_MOTOR01 = '减速电机';
ZhHantMsg.MIXLY_ke_SERVO = '舵机';
ZhHantMsg.MIXLY_ke_TB6612 = 'TB6612电机驱动';
ZhHantMsg.MIXLY_H = '正';
ZhHantMsg.MIXLY_L = '反';

ZhHantMsg.MIXLY_ke_2812RGB = '全彩led灯模块';

ZhHantMsg.MIXLY_ke_IR_G = '人体红外热传感器';
ZhHantMsg.MIXLY_ke_FLAME = '火焰传感器';
ZhHantMsg.MIXLY_ke_HALL = '霍尔传感器';
ZhHantMsg.MIXLY_ke_CRASH = '碰撞传感器';
ZhHantMsg.MIXLY_ke_BUTTON = '按键';
ZhHantMsg.MIXLY_ke_TUOCH = '触摸传感器';
ZhHantMsg.MIXLY_ke_KNOCK = '敲击传感器';
ZhHantMsg.MIXLY_ke_TILT = '倾斜传感器';
ZhHantMsg.MIXLY_ke_SHAKE = '震动传感器';
ZhHantMsg.MIXLY_ke_REED_S = '干簧管传感器';
ZhHantMsg.MIXLY_ke_TRACK = '循迹传感器';
ZhHantMsg.MIXLY_ke_AVOID = '避障传感器';
ZhHantMsg.MIXLY_ke_LIGHT_B = '光折断传感器';
ZhHantMsg.MIXLY_ke_ROT = '旋转编码器';

ZhHantMsg.MIXLY_ke_ANALOG_T = '模拟温度传感器';
ZhHantMsg.MIXLY_ke_SOUND = '声音传感器';
ZhHantMsg.MIXLY_ke_LIGHT = '光敏传感器';
ZhHantMsg.MIXLY_ke_WATER = '水位传感器';
ZhHantMsg.MIXLY_ke_SOIL = '土壤传感器';
ZhHantMsg.MIXLY_ke_POTENTIOMETER = '旋转电位器';
ZhHantMsg.MIXLY_ke_LM35 = 'LM35温度传感器';
ZhHantMsg.MIXLY_ke_SLIDE_POTENTIOMETER = '滑动电位器';
ZhHantMsg.MIXLY_ke_TEMT6000 = 'TEMT6000环境光';
ZhHantMsg.MIXLY_ke_STEAM = '水蒸气传感器';
ZhHantMsg.MIXLY_ke_FILM_P = '薄膜压力传感器';
ZhHantMsg.MIXLY_ke_JOYSTICK = '遥杆传感器';
ZhHantMsg.MIXLY_ke_JOYSTICK_btn = '遥杆按钮';
ZhHantMsg.MIXLY_ke_SMOKE = '烟雾传感器';
ZhHantMsg.MIXLY_ke_ALCOHOL = '酒精传感器';
ZhHantMsg.MIXLY_ke_MQ135 = 'MQ135空气质量';
ZhHantMsg.MIXLY_ke_18B20 = '18B20温度传感器';
ZhHantMsg.MIXLY_ke_18B20_R = '获取温度';
ZhHantMsg.MIXLY_ke_DHT11 = '温湿度传感器';
ZhHantMsg.MIXLY_DHT11_H = '获取湿度';    /////////////
ZhHantMsg.MIXLY_DHT11_T = '获取温度';     ////////////
ZhHantMsg.MIXLY_ke_BMP180 = 'BMP180高度计传感器';

ZhHantMsg.MIXLY_ke_BMP180_T = '温度';
ZhHantMsg.MIXLY_ke_BMP180_A = '大气压';
ZhHantMsg.MIXLY_ke_BMP180_H = '海拔高度';

ZhHantMsg.MIXLY_ke_BMP280 = 'BMP280高度计传感器';
ZhHantMsg.MIXLY_ke_BMP280_T = '温度';
ZhHantMsg.MIXLY_ke_BMP280_A = '大气压';
ZhHantMsg.MIXLY_ke_BMP280_H = '海拔高度';

ZhHantMsg.MIXLY_ke_SR01 = '超声波模块';
ZhHantMsg.MIXLY_ke_3231 = 'DS3231时钟';
ZhHantMsg.MIXLY_ke_ADXL345 = '加速度传感器';
ZhHantMsg.MIXLY_ADXL345_X = 'X轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_Y = 'Y轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_Z = 'Z轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_XA = 'X轴角度';  ///
ZhHantMsg.MIXLY_ADXL345_YA = 'Y轴角度';  ///

ZhHantMsg.MIXLY_ke_YEAR = '年';
ZhHantMsg.MIXLY_ke_MONTH = '月';
ZhHantMsg.MIXLY_ke_DAY = '天';
ZhHantMsg.MIXLY_ke_TEXT = '周';
ZhHantMsg.MIXLY_ke_HOUR = '时';
ZhHantMsg.MIXLY_ke_MINUTE = '分';
ZhHantMsg.MIXLY_ke_SECOND = '秒';
ZhHantMsg.MIXLY_ke_GET = '获取时间';


ZhHantMsg.MIXLY_ke_OLED = 'OLED_显示字符串或数字';
ZhHantMsg.MIXLY_ke_1602LCD = 'IIC1602LCD';
ZhHantMsg.MIXLY_SETUP = '初始化';  ////////////////
ZhHantMsg.MIXLY_LCD_ADDRESS = '设备地址'; /////////
ZhHantMsg.MIXLY_LCD_PRINT1 = '打印第一行';  /////////
ZhHantMsg.MIXLY_LCD_PRINT2 = '打印第二行'; ///////////
ZhHantMsg.MIXLY_LCD_ROW = '在第'; /////
ZhHantMsg.MIXLY_LCD_COLUMN = '行第'; /////////
ZhHantMsg.MIXLY_LCD_PRINT = '列打印'; ////
ZhHantMsg.MIXLY_LCD_STAT_ON = '开';  /////
ZhHantMsg.MIXLY_LCD_STAT_OFF = '关';  /////
ZhHantMsg.MIXLY_LCD_STAT_CURSOR = '有光标';  ////
ZhHantMsg.MIXLY_LCD_STAT_NOCURSOR = '无光标';  ////
ZhHantMsg.MIXLY_LCD_STAT_BLINK = '闪烁';  ////
ZhHantMsg.MIXLY_LCD_STAT_NOBLINK = '不闪烁'; ///
ZhHantMsg.MIXLY_LCD_STAT_CLEAR = '清屏';  ///
ZhHantMsg.MIXLY_LCD_NOBACKLIGHT = '关闭背光'; ///
ZhHantMsg.MIXLY_LCD_BACKLIGHT = '打开背光'; ///

ZhHantMsg.MIXLY_ke_2004LCD = 'IIC2004LCD';
ZhHantMsg.MIXLY_ke_print1 = '打印第一行';
ZhHantMsg.MIXLY_ke_print2 = '打印第二行';
ZhHantMsg.MIXLY_ke_print3 = '打印第三行';
ZhHantMsg.MIXLY_ke_print4 = '打印第四行';


ZhHantMsg.MIXLY_ke_MATRIX = '8*8点阵';
ZhHantMsg.MIXLY_ke_TM1637 = '4位8段数码管';
ZhHantMsg.MIXLY_ke_TM1637_C = '位数';
ZhHantMsg.MIXLY_ke_TM1637_P = '在第几位开始显示';
ZhHantMsg.MIXLY_ke_TM1637_Fill = '是否填充0';
ZhHantMsg.MIXLY_ke_TM1637_light = '亮度0~7';
ZhHantMsg.MIXLY_ke_TM1637_xy = '显或隐';
ZhHantMsg.MIXLY_ke_TM1637_left = '左边';
ZhHantMsg.MIXLY_ke_TM1637_maohao = '冒号';
ZhHantMsg.MIXLY_ke_TM1637_right = '右边';
ZhHantMsg.MIXLY_ke_value = '数值';

ZhHantMsg.MIXLY_ke_IR_E = '红外发射模块';
ZhHantMsg.MIXLY_ke_IR_R = '红外接收模块';
ZhHantMsg.MIXLY_ke_W5100 = 'W5100以太网模块';
ZhHantMsg.MIXLY_ke_BLUETOOTH = '蓝牙2.0模块';
ZhHantMsg.MIXLY_ke_read = '接收到信号';


//ZhHantMsg.MIXLY_ke_kzsc = '控制输出';

ZhHantMsg.MIXLY_ke_Count = '灯号';

ZhHantMsg.MIXLY_ke_YEAR = '年';
ZhHantMsg.MIXLY_ke_MONTH = '月';
ZhHantMsg.MIXLY_ke_DAY = '日';
ZhHantMsg.MIXLY_ke_HOUR = '时';
ZhHantMsg.MIXLY_ke_MINUTE = '分';
ZhHantMsg.MIXLY_ke_SECOND = '秒';
ZhHantMsg.MIXLY_ke_WEEK = '周';

ZhHantMsg.MIXLY_ke_angle = '角度';

ZhHantMsg.kids_Ode_to_joy = "圣诞歌";
ZhHantMsg.kids_birthday = "生日快乐";

ZhHantMsg.kids_tone = "音调";
ZhHantMsg.kids_beat = "节拍";
ZhHantMsg.kids_play_tone = "播放乐曲";
ZhHantMsg.kids_notone1 = "关闭蜂鸣器";

ZhHantMsg.kids_ADkey = "7位按键模块";

//////////////keyestudio///////////////
ZhHantMsg.Ks_ON = '高';
ZhHantMsg.Ks_OFF = '低';

ZhHantMsg.ks_MQ_d = 'MQ-2可燃气体传感器_数字';
ZhHantMsg.ks_MQ_a = 'MQ-2可燃气体传感器_模拟';

ZhHantMsg.KS_LED3wd = 'LED_3W';
ZhHantMsg.KS_LED_W = '白色LED';
ZhHantMsg.KS_LED_R = '红色LED';
ZhHantMsg.KS_LED_G = '绿色LED';
ZhHantMsg.KS_LED_B = '蓝色LED';
ZhHantMsg.KS_LED_Y = '黄色LED';
ZhHantMsg.MIXLY_KS_BUZZER1 = '有源蜂鳴器';
ZhHantMsg.MIXLY_KS_BUZZER2 = '無源蜂鳴器';
ZhHantMsg.ks_tone = '音调';
ZhHantMsg.ks_beat = '节拍';
ZhHantMsg.ks_music = '播放乐曲';
ZhHantMsg.ks_Ode_to_joy = '圣诞歌';
ZhHantMsg.ks_birthday = '生日快乐';
ZhHantMsg.ks_tetris = '俄罗斯方块';
ZhHantMsg.ks_star_war = '星球大战';
ZhHantMsg.ks_super_mario = '超级玛丽';
ZhHantMsg.ks_christmas = '圣诞歌';
ZhHantMsg.ks_notone = '关闭蜂鸣器';

ZhHantMsg.MIXLY_KS_RELAY = '繼電器';
ZhHantMsg.MIXLY_KS_MOTOR = '小风扇';
ZhHantMsg.MIXLY_KS_SERVO = '舵機';
ZhHantMsg.MIXLY_KS_2812RGB = '2812RGB模塊';

ZhHantMsg.MIXLY_KS_IR_G = '人體紅外傳感器';
ZhHantMsg.MIXLY_KS_FLAME = '火焰传感器_数字值';
ZhHantMsg.MIXLY_KS_FLAME_a = '火焰传感器_模拟值';
ZhHantMsg.MIXLY_KS_HALL = '霍爾傳感器';
ZhHantMsg.MIXLY_KS_CRASH = '碰撞傳感器';
ZhHantMsg.MIXLY_KS_BUTTON = '按鍵';
ZhHantMsg.MIXLY_KS_TUOCH = '電容觸摸';
ZhHantMsg.MIXLY_KS_KNOCK = '敲擊模塊';
ZhHantMsg.MIXLY_KS_TILT = '傾斜模塊';
ZhHantMsg.MIXLY_KS_SHAKE = '振動模塊';
ZhHantMsg.MIXLY_KS_REED_S = '幹簧管模塊';
ZhHantMsg.MIXLY_KS_TRACK = '循跡模塊';
ZhHantMsg.MIXLY_KS_AVOID = '避障模塊';
ZhHantMsg.MIXLY_KS_LIGHT_B = '光折斷模塊';

ZhHantMsg.MIXLY_KS_ANALOG_T = '模擬溫度傳感器';
ZhHantMsg.MIXLY_KS_SOUND = '聲音傳感器';
ZhHantMsg.KS_LIGHT = '光敏传感器';
ZhHantMsg.MIXLY_KS_WATER = '水位傳感器';
ZhHantMsg.KS_SOIL = '土壤湿度傳感器';
ZhHantMsg.MIXLY_KS_POTENTIOMETER = '旋转電位器';
ZhHantMsg.MIXLY_KS_LM35 = 'LM35溫度傳感器';
ZhHantMsg.MIXLY_KS_SLIDE_POTENTIOMETER = '滑動電位器';
ZhHantMsg.MIXLY_KS_TEMT6000 = 'TEMT6000環境光';
ZhHantMsg.KS_STEAM = '水滴傳感器';
ZhHantMsg.MIXLY_KS_FILM_P = '薄膜壓力傳感器';
ZhHantMsg.MIXLY_KS_JOYSTICK = '遙桿模塊';
ZhHantMsg.MIXLY_KS_SMOKE = '煙霧傳感器';
ZhHantMsg.MIXLY_KS_ALCOHOL = '酒精傳感器';
ZhHantMsg.MIXLY_KS_MQ135 = 'MQ135空氣質量';
ZhHantMsg.MIXLY_KS_18B20 = '18B20溫度模塊';
ZhHantMsg.MIXLY_KS_RT = '获取温度';

ZhHantMsg.MIXLY_KS_DHT11 = '溫濕度模塊';
ZhHantMsg.MIXLY_DHT11_H = '获取湿度';    /////////////
ZhHantMsg.MIXLY_DHT11_T = '获取温度';     ////////////
ZhHantMsg.MIXLY_KS_BMP180 = 'BMP180高度計模塊';
ZhHantMsg.MIXLY_KS_T = '温度';
ZhHantMsg.MIXLY_KS_QY = '大气压';
ZhHantMsg.MIXLY_KS_H = '高度';

ZhHantMsg.KS_SR01 = '超聲波模塊';
ZhHantMsg.MIXLY_KS_3231 = '3231時鐘';
ZhHantMsg.MIXLY_KS_GET = '获取DS3231时钟时间';
ZhHantMsg.KS_ADXL345 = '三轴加速度计传感器_ADXL345';
ZhHantMsg.MIXLY_ADXL345_X = 'X轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_Y = 'Y轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_Z = 'Z轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_XA = 'X轴角度';  ///
ZhHantMsg.MIXLY_ADXL345_YA = 'Y轴角度';  ///



ZhHantMsg.MIXLY_KS_OLED = 'OLED模塊';
ZhHantMsg.MIXLY_SETUP = '初始化';  ////////////////
ZhHantMsg.MIXLY_LCD_ADDRESS = '设备地址'; /////////
ZhHantMsg.MIXLY_LCD_PRINT1 = '打印第一行';  /////////
ZhHantMsg.MIXLY_LCD_PRINT2 = '打印第二行'; ///////////
ZhHantMsg.MIXLY_LCD_ROW = '在第'; /////
ZhHantMsg.MIXLY_LCD_COLUMN = '行第'; /////////
ZhHantMsg.MIXLY_LCD_PRINT = '列打印'; ////
ZhHantMsg.MIXLY_LCD_STAT_ON = '开';  /////
ZhHantMsg.MIXLY_LCD_STAT_OFF = '关';  /////
ZhHantMsg.MIXLY_LCD_STAT_CURSOR = '有光标';  ////
ZhHantMsg.MIXLY_LCD_STAT_NOCURSOR = '无光标';  ////
ZhHantMsg.MIXLY_LCD_STAT_BLINK = '闪烁';  ////
ZhHantMsg.MIXLY_LCD_STAT_NOBLINK = '不闪烁'; ///
ZhHantMsg.MIXLY_LCD_STAT_CLEAR = '清屏';  ///
ZhHantMsg.MIXLY_LCD_NOBACKLIGHT = '关闭背光'; ///
ZhHantMsg.MIXLY_LCD_BACKLIGHT = '打开背光'; ///
ZhHantMsg.MIXLY_KS_1602LCD = 'IIC1602LCD';
ZhHantMsg.MIXLY_KS_2004LCD = 'IIC2004LCD';
ZhHantMsg.MIXLY_KS_MATRIX = '8*8點陣';

ZhHantMsg.MIXLY_KS_TM1637 = '4位8段數碼管';
ZhHantMsg.MIXLY_KS_ws = '位数';
ZhHantMsg.MIXLY_KS_value = '数值';
ZhHantMsg.MIXLY_KS_begin = '显示的位置';
ZhHantMsg.MIXLY_KS_fill0 = '是否补充0';
ZhHantMsg.MIXLY_KS_light = '亮度0~7';
ZhHantMsg.MIXLY_KS_XY = '显或隐';
ZhHantMsg.MIXLY_KS_L = '左边';
ZhHantMsg.MIXLY_KS_R = '右边';
ZhHantMsg.MIXLY_KS_MH = '冒号';
ZhHantMsg.MIXLY_KS_one = '第一行';
ZhHantMsg.MIXLY_KS_two = '第二行';
ZhHantMsg.MIXLY_KS_three = '第三行';
ZhHantMsg.MIXLY_KS_four = '第四行';
ZhHantMsg.MIXLY_KS_clear = '             是否清屏:';


ZhHantMsg.MIXLY_KS_IR_E = '紅外發射模塊';
ZhHantMsg.MIXLY_KS_IR_R = '紅外接收模塊';
ZhHantMsg.MIXLY_KS_W5100 = 'W5100以太網模塊';
ZhHantMsg.KS_BLUETOOTH = '藍牙模塊';
ZhHantMsg.MIXLY_KS_rec = '接收到的信号';

ZhHantMsg.MIXLY_KS_Count = '灯号';

ZhHantMsg.ks_test_V = '电压传感器';
ZhHantMsg.ks_test_A = '电流传感器';
ZhHantMsg.MIXLY_KS_FLAME_a = '火焰传感器_模拟值';
ZhHantMsg.joys_btn = '摇杆按钮';
ZhHantMsg.hwwd = '非接触式红外传感器,引脚为 SDA : A4 , SCL : A5';
ZhHantMsg.color_sensor = '颜色传感器';
ZhHantMsg.RED_VAL = '红色值';
ZhHantMsg.GREEN_VAL = '绿色值';
ZhHantMsg.BLUE_VAL = '蓝色值';

ZhHantMsg.matrix16and8_init = '点阵16*8初始化';
ZhHantMsg.matrix16and8 = '点阵16*8自定义图';
ZhHantMsg.matrix16and8_image = '点阵16*8图';

ZhHantMsg.Ultraviolet = '紫外线传感器';
ZhHantMsg.WaterTurbidity = '水浑浊度';
ZhHantMsg.C2H5O = '有害气体传感器';
ZhHantMsg.CeramicVibration = '压电陶瓷震动传感器';
ZhHantMsg.DustSensor = '粉尘传感器';

ZhHantMsg.MMA8452 = '三轴加速度计_MMA8452';
ZhHantMsg.SHT31 = '温湿度传感器_SHT31';

ZhHantMsg.ks_neopixel = 'RGB灯 neopixel';
ZhHantMsg.ks_neopixel_show = 'neopixel show';

ZhHantMsg.ks_TM1637_INIT = '四位数码管_TM1637 初始化';
ZhHantMsg.ks_4DIGITDISPLAY = '四位数码管_TM1637 显示';
ZhHantMsg.ks_4DIGITDISPLAY_time = '四位数码管_TM1637 显示时间';
ZhHantMsg.ks_4DIGITDISPLAY_brightness = '四位数码管_TM1637 亮度';
ZhHantMsg.ks_4DIGITDISPLAY_clean = '四位数码管_TM1637 清屏';

ZhHantMsg.ks_SPI_recv = '接收到数据 获取寄存器数据';
ZhHantMsg.ks_SPI_run = '执行';
ZhHantMsg.ks_SPI_read = 'SPI从机获取寄存器数据';

const ZhHantCatgories = {};

/***/ }),

/***/ "./src/media/4wd_runing.png":
/*!**********************************!*\
  !*** ./src/media/4wd_runing.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4wd_runing_7c960c5b.png";

/***/ }),

/***/ "./src/media/bluetooth4.0.png":
/*!************************************!*\
  !*** ./src/media/bluetooth4.0.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/desk_bluetooth4.0.png":
/*!*****************************************!*\
  !*** ./src/media/desk_bluetooth4.0.png ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/desk_buzzer.png":
/*!***********************************!*\
  !*** ./src/media/desk_buzzer.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/desk_ir_avoid.png":
/*!*************************************!*\
  !*** ./src/media/desk_ir_avoid.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/desk_irr.png":
/*!********************************!*\
  !*** ./src/media/desk_irr.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/desk_led.png":
/*!********************************!*\
  !*** ./src/media/desk_led.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/desk_runing.png":
/*!***********************************!*\
  !*** ./src/media/desk_runing.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/desk_runing_f9c5ac77.png";

/***/ }),

/***/ "./src/media/desk_sr01.png":
/*!*********************************!*\
  !*** ./src/media/desk_sr01.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/desk_track.png":
/*!**********************************!*\
  !*** ./src/media/desk_track.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/irr.png":
/*!***************************!*\
  !*** ./src/media/irr.png ***!
  \***************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/light.png":
/*!*****************************!*\
  !*** ./src/media/light.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/otto_bluetooth4.0.png":
/*!*****************************************!*\
  !*** ./src/media/otto_bluetooth4.0.png ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/otto_frog.png":
/*!*********************************!*\
  !*** ./src/media/otto_frog.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAC4jAAAuIwF4pT92AAAIW2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTA0VDA5OjUyOjAxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0wNFQwOTo1NDozNCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0wNFQwOTo1NDozNCswODowMCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjNkZTUyMmMyLTM2YzEtODk0Zi1hYzgwLTQ1MTMwOTgxYzk2MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowODgzNmRlZC1lMDBmLWVkNGItOWNkMy0yNWZlNWUxYTg4NjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUyMDY5ZWIzLWNiZDQtNWU0ZS05NWY0LWRmZDczMWE2MjI0NSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJlYzE4NTczLWY4MDYtOTQ0OS1iZDNjLTc5MGI4OWMxNjI0OCIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0wNFQwOTo1MjowMSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA4ODM2ZGVkLWUwMGYtZWQ0Yi05Y2QzLTI1ZmU1ZTFhODg2MSIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0wNFQwOTo1NDozNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT43MUMyNzg1QzYxRjEzRkMxN0UzQUYzRTdGRjE1QThDQTwvcmRmOmxpPiA8cmRmOmxpPkJGQjVDRkI1RjBBQjk5OTg4NEZGQjlDMzY1MkI3REEzPC9yZGY6bGk+IDxyZGY6bGk+RjgxMEUxRTA1M0QwNDlFMjQxMzUyMUFDRDYxRTUwMEE8L3JkZjpsaT4gPHJk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";

/***/ }),

/***/ "./src/media/otto_sr01.png":
/*!*********************************!*\
  !*** ./src/media/otto_sr01.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAABJCAYAAABYWDYeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJztvXm4HVWZ7/9ZNVft2sM5OZkJIQwhIGGO4MQkIBG9EmycoG9Lq/1zAK5Dq3i7BRVtG7SVRvSx+952QkWgQWQQpAGlGRRQGTNAABmSkJDh7LHmqvX7Y9XZyT7nBEIIk9c3Tz05u6p27bWq3lrrHb7vdwmQknHi+wVxLEhTMf7QX+Qv8pKJtuWHI44IuOnmp7j3vse5/4HH+drX19NoFC9X2/4i/4+LGBs5Tzyxw3lfW0+9VsPzPPI8Z7TZ5KGH4IR3zCYItOe61p+NzJoV8/o3tNhj94BqLX9JfnN01OC+e31uu61BEOgvyW++3DJrVsapf9ti7tyUtWsNfvLjGg89ZPWPC5BS1+H2O55g992rDA8N9Q/mec6q1as555wG3/uP+svR/pdUhoZSPvnJJzn6mFE0bYK185JIGGpcfPEMvv+9mSTJn++A8KbDQi64YB1TphjYtk2aJLQ7CWd9foT//M8qUCrnrrum3PBfT7HT7NlYljVwkfXr13P5FZKPfmT6y9GHl0x22SXi299ZwchI+nI3BYAHHvD5xMfn0+n8+Y2irie55ZYn2WWux8jISH//6Ogoz6xvcfSb57B6taFszjhWjo+c6BtRSNk//ucqnpfzr//60CtGMQEWLuzypXMefbmb8aLIoYeEDA/nDA8PD+wfGhrCcTSOProHlA7R6tUGS5faNFutgZPjOCYIAm64ofISNfvlkVP+ei0zZiYvdzMmyOtf3+KNb2y+3M3Y4VKrFWiahqZNNFt0XadeV064MbbzzDOncvHFa8iyNXiuS1EUtDsdrrmmwnW//PNWzsWLN77cTdiqHHfcRm67rfGiXV8IWLAA9toL9twT5syR1OtQqYCmQa8HrRasWSN46CFYsQIefBDyF+AnLl1qkecFYRjium5/f5qmpGnKgw/awBbKuXyZxVsX78QnPjnKvgt7tNo6P79iCj/7WW37WwF4Hhx0kLoB8+dL5sxRHa9UVAd7PbU9/jg89JBg2TK4917Ishf0s9ssllUwc2b80vzYdsiuu4Y7/JrVKrzznXDccZIjj4SpU7flW5tNvlYL/vu/4YYbBJdeCuvXP7/ff+QRi8surfLe961nyvAwjuOQJAkbN23ijjscfv1rD9gilLQjZZdd4OST4ZhjJIccArb9/L7f6ajOX3+94Gc/g40v4sBmWZL/vvX3iFeoWb1ypccpJ79mh1zr4IPhf/0vyZIlatDYEZKmcN11cOGFghtv3Pbvua7krLM2cOI7O+i60sKbb/I488ypjI4qJ3CHKaemqbfxYx+TvOlN7LCHnSTwy1/C+ecL/vu/d8w1x8vll9/PTnNemaPn9ddP4eyzdn1B1zjkEPjCFyRvecsOatRW5M474YtfFFx//bZ/p9Eo2GmnlGeeMXjmmcHIxAtWTiHgve+Ff/gHyV57vZArPbfceiucdZbgllt27HU/8IE1/N3/t3rHXnQHyRmnz+fOO7cvxjw0BGefLTntNDV4bE3GojRPPPEET69ZQ6fbIegFaEJg2RYVv8qsWbPYaaedsCwL8RwjzzXXwOmnC554Yrua3ZcXpJzz58OFF0qOPvrZz8uyjDRNWblyJWvXPk2n0yVNEgxDx7RsalWf2TvNYdasWfi+/5y/e8018NGPClat2t6WD4rjFPzkJw++4kbPX/96iDM/u/t2fffYY+FHP5JMm7b1c+6//35+f/ddPP74E6xevZrRTZswDINK+QwkYJkGUkqao6M0GkPsvPPO7DJvHvsfcADz58/H3orN1u3Cxz4muOii7Wo+sJ3KKQSccQace65kXMy+L1JKbvnNb7jnnnv402OP0QsCep0OWZ5RrzfQDZ00zdB1HSEEzeYojuMwf4/57DJvHgcceCDz58+fkBQYk02b4NRTBVdf/XxbP7nstFPMt7+94hUTUvrDH2r8/ad2f96pTE1TU/j//t+Tj5ZhGHL11Vdx1513seqpJ/FrNYo8p91u43kenuvSbDap+FUsy0ICaRwRJym6Juh0uniey7QZM2k06uy7cF8OOfRQZs6cOWl7/uM/4LTTBPF2vPfPWzmrVfjhDyUnnDD58TVr1nDVlVfy8MMPs3r1KlzPw3FcRjdtxLJtKr5P0O1hWiaapuO5Lr1ul2a7RbVaJQwCDNNkaHgKM2dMZ5+FCzn00NcxbZIhQEr4l3+Bz31OvKDQxua+ZZx2+iqOP34DpvnypC/bbYOLfjSDn/50Bln2/Ax3w4B/+zfJqadOPJYkCT+//HJuv+MOnlm3DtfzqPgVkigmyzMs0wJNI4ljNE3Dti2CQEUKKhWPXi+gKHJ0TccwDIoiR0pJxa/iui6HHnIIb1m8GG8ST+s3v4ElSwTjwujPKc9LOYeH4ZprJIceOvFYs9nkh9//Hvfedx9FnmMYBqZtI/OCOE0wNA3HcYiimLwocByHPMtI8wzTMCiKgjhOMA0D0zLJs4wsz6lUKgwNDfPaQ17L4sVvxTTNCb995ZXwvvcJouj5dX5rMmVKyuter4AfQ8MZhvHiK+qGDSZ331Xjzjtr25VTt2244grJ4sUTj93zxz9y0UU/otPp0u12SZOYRqOBYdkkcYSm6xi6TpbnFHmOrhtomiCOYvUcLYskisiR2JZFUUiyLEPXBIZhEkYhlmWx++67c+RRb+aggw5C1wdH/D/+EY49VrBp07b3aZuVc9YsuPlmyfz5E4/98tpruezSS5FlLKzVbKlUlKviV3leYBg6hmESRxFCCCzbJklikGDaFlmWkacZlmWiGwZRGCEBx3FIkxihG8zfYw/efPTRHHDAAROM8ptugv/xPwThjg8LvuJF0+DiiyUnnTS4vygKLrv0Um78rxtwvQpBt0shJY7rKAVLU4QmcB2XdqcNQqNeqxIEIXmeYdk2mtCIoghNE7iuR6fbQSDwqz5RGJHnGaZpYloWURBS9X3e+KY38da3vW0gwA7Kmz/6aEGvt2392iblrNXgN7+R7L//4P4wDPnhD37AXXfeiVepkCaJGiV1A8/z6HU7FBIqfoUoDMnzAtd1KKQkiWJ0w8DzXDrtDgUS368SRRFFlmGaBoZpEgQBmqZRrVZpd7rUa1WOOurNHPuWt0wwxq++Gt75TvGSBfBfKXL++ZIzzhjcVxQFF/zrv/LgA/f343p5nmMaJoWUZFmKaSp7vsgyCsAwDGRRkBXqPCklWZ5jGgZCQJ5l5IXEcWyyPCfLMkzDRABppvwHXdMwTJN9913Ie977Pur1wUjDlVeqZ7QtQ6IOX/jCs51gGPDLX06cyoMg4Lxzz2XZ0qWYpoks8nL61hGaIEtTJGDoBmmSkhVFf/rO0qzMrQqyNENKia5ryo4pcjRdRwiNNE0RmoZpmCRpgsxz4jjmqVWr2LB+PQsWLBiY5vfcU5ke1133Co2ovwjyV38FX//64L44jvn6185jxfLluJ5HnhdIWWBZNqZtkSQxmhB4FY80TdENg3qthus6GJZFo1ZneGhImVWex9DQEFlaKqZtI4UgT1N0XcdxXaIwRNMEnlchyzOSOKY52uSZZ56Z4NEvWABhKLj99ufu23Mq51e+Ijn55MF969ev59x//iqrV6/Gtiws2yaOYnRdo1KpqOlagOdVAIkQGjW/wpQpU9T04NhMnzkDIQSmZVOt+liWRRLHIDQqnkcURcrgrlQoipwsSbEcB9OyCHo9NmxYT3N0lL322hvD6Gdhee1r4ZFHBA888OwdX7BAhTvGRlnXhd13hw0bNp9Tr8ORRyqTZs0aKJ6jKGBkBN7wBmg0VEpv7PzZs1XYbdYsmDFD7R8/te26q4pLjo5OvO7wsHJEx39n3jy49lqJ4wzuv/CCC1i5ciWO4xIGPQpZUKn4pGlKHMU4jo3juOiGTqNeZ/r06RSyQBeijxRK05RKRTlNWZpiOzbTpk5DItEA23HI84I0itB0Dce2iaIQCbieRxgErF+/nk0bNzJ/zz0HFPTww+HGG587FPis0/qxx6pRc8uQRK/b5atf/SqrVq/CdVziOEYisW0HmeekaQqaoFGvI4TAMAx83ydJErIsU0FcBFEcoWk6Fc8lDEPyPMf1PJI4oRf0SJOELC/6dqnrecRRRJbn6u2VEtOyOPigg3jXe94z4CW223DggYLHHtt6x2+9VfLhDwuWLlWf99kHvv1tyeGHq1H3xBNVSOaqq5RyHHoovPWtgrVrJ7/eccfB174mufZamDYNFi6Eo44SdDrw5S+rrNny5erchQth5Up4//vVb515Jhx6qCQI4Omn4VOf2jzyaxrceKPkyisFF1ww+JtXXy05/vjBfT/4/ve49dZb+9N3mqbouoZhWiRxRKVSodEYQhY5UoJlmYAgCkN0Q8d2nL4pZRomeZFTFAWGbiA0Qa8XYFsWjmPT7fWUg5VmFEVBnmUYpoGmG4RhgK5pjIyMsO+++/Ke975vYBBZulQ9o/RZUIrG1g64LnznO3JCrOzbF17ImjWr0cQYBrQABJoQZEgqvk+9VsNxHHpBD03TECgbSNd0dN0gy9LSNjGQQC4lCA1NqB/zXA+r0SBLUzZt2kSSJAihriGEQGgaWZaRhQFLly3l+uuvZ8mSJX0nqVZTbT/uuO2b3oeH4RvfkBx8sOiPpKefrjJh3/zm5N95//slp58u+M1v1OdzzpG87nVwww3q88UXC777XfW3YcCaNQr9kyTwgQ9IFixQ4bDbb5fMng2ry4TVZz7DpLHkE09kgmLefttt3HbrbVQqPp1OBwFUPI80S6EomDFjBrVanVZzFCklQ8NT6LTbFEVBxfeRSKIwwjAMqtUamzZtRBcajaEhOp02SZxRrfoYhkm320XTNHaeszMbNmyg3W7j+D5pmpAmMZZp4TgOmzZu4t5772XqtOkce+yx/Wf0mteoe/qNb2z9OWxVOT/3Ocmu41K6F//0Jyxbvhy/qkbCKIowDBPbcUBKhoeHGRoaotVqEUYhvu9TFAVBGGKaJp5Xod1qIiXUhxp0Ox3CIMRzXZDQ6/XQDZ16vUFz0yYKKdlpzhw6nS7NZhPTsjAMgzAI0DRB1fdpjjb53W/vYPr06bzhDW/ot/XYY2HJEvj5z7fe+SOOoN/HnXfevP/II+Huuwen+G99a+vXAbj2WsEFF0j+4z8EV14Jn//84IvheWradhw47DBlUnQ6m0fRsTjt/ffD3nsr5TzgANh3X8lllw1eS9fhn/95cMLbtHEjl1/+n0gk7XYbQHnQcYTrugw1hihkQbvdQjcMNKHRbrcoigLbsomiiDTLsG0LAYw2RxESLMem3W6TZRm2Y5MmKWEQlgF6SbPVRBOC6TOm0+v16HW7GIZBXuR0u110XSPoBfz29ttZsGABc+fO7bf5H/9R3a+txT8nDahNnw6f+tTgvhUrVnDzTTdjmiZZkpIlypDWNQ3PcRgaamDbNr1uD1kU6LpOkiQEQYgmNKSU9HpdQKDpGp12mzzN0HTl+MRxjK5p6LpOt9MGTcM0TcIgBFkwdWSEeq2mRlFNIDSdoDQH2u02t996K5vGwZfOO0+iP0uCZf/9JW94g9oOOGDzw67Xnx0J9frXw9//vdrGQmsXXQQf+pBg550l110nueMONQKOyQc/KLnkEsnSpZJ3v1vy5jcLikIpa7e7+bxud7MSf/WrajQeL+96l7KPt5RLL72ENM0QQoF4XddRSjk0pIoWKx6ykAgEnushNIEsCmzbLu3HDF3T8P0qeVGgARXfR2gaBRLbtnAclzzPMAwdz/PULCYErudhmRa2ZTFjxnRq9Rp5nqMJUX4nZ9PoJm666UbyLbIljQZ89KNbv8+TKufHPy7ZMkQlpeTSn/0MwzRVMVKaouk6jUaDxlADy7bwfR9NaP0Au+d6ZFmOQFKtVZF5QZ6poLppWSpQb5r4fpU0y8nzjGq9hpSSPM/xXBfHdUizFE3TqdaqWJZJvV6jVq2iaxp5nmNZJoZhsmr1am6+6SayLeJIu+2mvNmtyfnnC848U23nn79ZCVauVA7TlrLbbnDKKervdevUCHf//fTf+g9/GO66S9mLe+8t+NWv1H0ckwsuEBx7rGDRIsF++22eqtetUw9pTMacog9/WJkXX/mK5KSTJO96l2RsYvj0pwdHzaeeeorly1cQ9LrkeaYUB4HrOtRqNUzLotVqoxs6XqVCr9clCiOqtRp5ltPttLEdF8d1+yOmV/Hp9XpqBqxUkECr2UTTdRzHodPpkGUZVb9KkiT0ul1c18NxXQzDwHFcHMchDAPSNEVKyaMrH+Hee+6ZoGtbg1ROUE7fh498ZHDfb++4g7Vr1xJHEUGvh2lZeJ6LLgSGrmPZNp12hziOcR2HJElpd9pYpoll27SaLaSUeJ5Ht9clCgK8SgVNE7RaTWzTwHZdmqPNUoF9kiSm0+7gll5lc9MomtCo1+pYlq28Qscly3O6vS5ZmrJs+XKeePzxgbZ/5jPPP7tzxx1KYd76VvXZttU0Olby8uijypa84QalXADvfrfk7/5O/S2E8q5HRyeOeo8+CmefLbjoIjWqP/WUcqDGRstDD4Xf/x4uuQQ+8hHB//k/gjvuUG166CE48EAmxJuvueZqwjBAStANAwTUazV0XSfPc6IoQgjQhEaaJip2aVmkSUpRFKBpCAFJEqMLDU3XSdNUpSuFIM9z0kQF7E3DJE6S0knSiZKYvMgRmqby8GWIaWRkRN0IKTFNgzTNaDZHueeePxIEQb/tU6dOtJ3HZIJy/tVfKYdiTKSU3HTTjRTI8h9UKhWqflXVgAgN8kJ1UgACijxDCIFuGBRZDlKiGwrdIguJ0HSkhDQvEAg0Xe9/X9d1JJDlBZquoelqhEQT6KZBIQs0TTAyMgXdNMjzAqRC0IyObuLuu+8aGD0POAD2229ix9esUc7ImCSJ2gfK/luyRHDaaZI//EFty5Y9u9156qmCt79d8sQTkkcflTQam52nZlNQmoEA/PjH8NhjanrOc/j0pwVXXSW5+WbJeecJRkeV1/6HP6ht2TLB0qXKOTvllMGXbXR0lPvvu580TfF8H13TqVYq2I6DX60SRzFCaDQaDYUOixPqtTqmaRIncWnj14mjmCzPaTQagCRNYny/iudV6AUBmq7RaAwRxRFZmtJoNNRzSlI8z6Pi+8RhiJSSer1OnqVUfZ9avY7QDZI4Js0y1q/fwLp1gyGP8X0akwmhpBtvlBx11ObPSx98kAsu+FeSJFVhoaqPa6uRq9EYol3Oa9VarT+E67qBX6nQabeRQLVWpdftUUiJW9YnxVGozvN9ms1RpIRao66ACFmKbdtouk6320MIaDQatFptijzHr/pkaUoUx2zaNIphmoTdLoZpsueCBZx66qkMbVHZ9y//ohTgz0Eef1wOOG+/uPJKrvrFlRimSZplNGp1fL8CqBFPlC98UZpLVpkbT+IIp3REkzRBIPr5cHX/lUmVpyqNKZFkmUqS2LZDnuckaVJiJPK+maZpGkmaUOQ5ruuSJClPr30aXTeQSGq+zxsPO4wlS07se+5xDFOmCLYYUIFxI+fQkPJgt5Tbb7+dtFRMTdNwS6UxDZNup02BRNM1pZhJokZTKen2usjyxgRBQF7k6LpOmiREUYgQGkIIut0uQmgYhkEUhMRxjCjtyaAXIIRAExrdTgdZqFEziiLiJMEwDBr1upomNNXRDeuf4fe///1AH0488YUrxStBdt99MKoA8MD99+E4DrpuUK1UqPgVvEpFKSZQqfh9xbQtq5zOY3TdwHVc8kzNcl7FQzeMUoFtLNsmz3I0TVMxZCkRAmWO6TqFLLAsC89TSRKhacrpQoKUOI6LWULu6vU6juNQ5DlpmrFm9ZqB2c22YYtAS18GlPPwwwcxgGma8tBDD6EbOq7rUqkoD61aVVN6Xkgcyy7TVjkCQa1aQxYFUqpcuV7aG5ZpUSlvmiwktXpNBW4LNRLajk2apRimSa1aI8ty8iKn6vvohrKdHMdROfw0RSs9S13XqbgOrldB6Dq9IOCJJx5XyYBS5s1TdU2vdjnyyMHPURTRbLWJopgsy5g2fQa6rtNut9FNA6/q0+0qe3zsnvbabVzXw7btEuwh8Cs+QS8g6PVU+E8WykmyLRzPo9PpUJTPMwoj4jCg4lXUb7WaCiNR8UonKadarZGmKd1OF9d1GGoMkcRx39Rbu3btBN/giCMmTu3as53w1JNPEoRq9EriGM/zsGybbqdDksR4rkuSJHQ7bRzLxrBMWq0mUqhAeq/XJY4iKhWPoihotZoYhoHtOIw2m+SF8t573S7dThfHdtA0QbPZVG+s69HptInjGK/vJLVxbBvTMBgdHUUIGJk6jSSOFHpJ01i9eg2j4/KAW5oqr1bZb7/B57NixXIVRJeSoaEGRen8yEKiCaFgboWCL8ZJokZTw6CQsp8e1g2dOI4pZIFhGAodlmUlWEQQRxFSKFBIEivnB03hINIkVQqn6aRxgpQSw9BJsow8zxDlbJYkCbV6DU3TCcOQIst4fFwNx3gnD8Yp53jH4YEHH0TXNIq8oNGoK9Q6gqKQiHKIzXMVWxubiiUC09yc9lKF84I0S5VdYxjkeQZSYugGeZaT5wW6oaPpOnmm4mC6oatrSKnSXlKSF7L/9mWZiqMZpgmoHLzQSrMhCFi9erAmaOHClwc8vCNlzz0HPz/22J9I0hTfr1BvNAijEKRizkjTlDRJqdVq6IZJmiZYtkXVr5ImCVIWNIaGyLOMJImpVqs4rkNc4jvr9TpxooDI9VqdoihI0hTX9fArFaI4RtMEtXqjn5pu1BtoQiMOQ2zHoVqtEkcRIJk6dSqGrpEmiRqcNm181r7BOOUcf8Iz69YRBCGu5zI0PIUkTojiiHq9hmlaBGGA47hUa1WiMEAWylNL4oQ4Vt6eaZr0uh1Mw6RWryvbtOwIQhAnibKTXI8g6CkbpVFX3t3YzdUNgkDldH2/SlCishtDygONwoiRkam4jkMYRQhNY924JPhknX+1yR57DH5ev24dpmlgWza9TgdDNzBNs3QwJWaZFImiUJlhuYppCk1g2w7tZou8KLBshyiMCIIA01TYh+boKAKBZVkqYZKp4HuepXTaHeU8CdFPhZq2pQrjQlXJkGe5mr2ESqw0R1UZjmVZdDodNm0aHbA7586dmKbtK6fvK8TMlrJhw3o0XadWq9FuNfuhniAISeO4DLrndDsqxaFpgk67VULgDOIoVIACXQcB3W4HoWlYhkm321FgV6Fgc72gh5Cgl9mjolCOVhAEJFHUtzuDIFDtMAwVAcjzcmqKMHRdTTFZRmfL2M0kD/bVKOOohegGPVzXxTRNhNBwS/DLGEjbNFUaURManlfa+1Liul4Zp5FYloVtW/2ZzXEcClkgdJ1KpYJhmOWUb/bjylIo4LEmNGQZ7DdKOKRlmlRKKJ5hGFQ8r3R+NfxqFctWvkUUhoRbIMN1XWXmtpS+cm7BfNiXIAhp1Gv9EIPruriuS5Ype6Jaq5FlGYUs+s5JUcgyQ+SS5QVCaCoTkecUeYHvVTBMk6IoME2DWq2qnBcpqTVU64qiwKt4OLajygEMQ3mdRV5OMzV0TaU9Lcum4lXIsgyvouJtRZHT7fWItqjbGP9gX22iaROJEPI8J0szLNvCq3h0O22yPKNWq5EmKb1OF8+rYFkW7VYT0zCp+D5hEBCGIX7Vp8hVDtyxVbqz1W4hEFT9KkHQI+j1qFR8NE2j2+timSZ++VtplqpZM4ro9tSLYlk2rVYLyzKpVHy6va6C3/kVirwAWWBaFggxgTiuWh3sn7G1A1LKEhickqUpXkWh2cMownNd8iyn1Wxi6AaOY9MLemRZpjy/ICBOkhLDJ2k1W2iawPE8giAgyzN83ydNEprNloqP6RqtVgsk+L5PEAbKnqpUlDPVHFWeue0oYINUYY04jmi3W7iuCmOMNlvYlkJxb1nKMb5/rzZxnInVlGmS4nouAuWwFlKWmIaUPM/RTQOBJE2TfuguSRI1lZuWshXzQiVykMSxAiFrhk4cReSFKq/JspQ4SdA1gQSiOC6dH4M4DFXGyTSRUgGdhdBAKBieLAp0wyBNU7Isw3U9CikJw3BCqU1lHCVXv7vjyj3KHHeGadkq01MWNWllRifLM6RUWZyiKJRTU969Is/RNKHKf5MEUNM8QJZn6JoaYZM0U2+SoZNnGUWW97NFRV5g6ga6ppcjtVa2o6AANMNQNzvNUIg7jTzLcCwLo0y/bSmGMTn07NUiUTQReatpGiNTRkiShDTNaDQaCCGI4xjHdfArvip7KQrqZYYoiWOqvo9hmaqATVcosLFUZrVeRxYFcZqWTpLbP69aqyuFTjNq9boyoUonqVqtlhGAgnq9RlpyFdRqdUzTIo5jLNtmeMqwqiPTxIRnNL7+S9vaAQCEYMrwsAoBBL0yJeYT9nrkeU6jMUSaKERRrVY6P70ulm1Tr9UJeyrfW280yPKMMOhR9avYtk0Y9NA1jXqjQRRGZGlGY2hI5WvjCNtxqFQqBGEAhaRW3pg4iqj6Pqah0+12+mCQMOiR5wVTp00jzTJADhjcWTaYrny1SVEwIYPiOGoKFeVA0Gq2SJIUyzRIkqQPjzNNFeLLC1WqEYYhURBg2RZSSlotRbNoGAbdMlbpWBZBENDtdNDLgaDVbKJrGrajwolxHKnoS5bSarYwdB3DtGg1VdbQsm2FpYhCDENV1DZHm1iWhWPbE2rAxrkJm5Wz0xl3QNOoVatEcUSaJn27s9frqXCRYdDtdRW8X9cJg5A4itE0HSklnW4HBJiW2Qe0mqZFmiYEYYCm62i6piB2gGGoGFiSxCrElCsnCanCSr1elyJXU0Qcx4RR1L9pvSCAMoQVhSECgW3ZA4QM4/v3apTxJRzDw1NU1s5xlJctwDQNHNcroWkKsgYgiwLHsbFK50fTdBzHVeZPaSKZloksa71sx0FKiabrKk4ti7Jq1ilnPhUXrVQqCmJXQucEykTdJ2HJAAAZaUlEQVSwLRvLVOaVXvITSKTC4daqVCqVAX7OongW5Zy0dmXKFLJUTcPVWo2shOPXa7U+Gt11lCGdpSm6oaBtWZ6T5zm1Wq2vrLZl43keSZIqJ6mqnKS8yKn4vioVTtMSlOyp38rzfvA2Lx0e1/MUlY2uU6vVyUvQSbVW7ZsbTgl62LIs4PnUS79S5dFxRMdDQ0P41SpRHBNFYR/40W6OYlk2vq8SHHGclPC4jG63i+u62K6jIhoC/FqNoNcl6CrnByTtdgvbtvFcj26nqzJ+ZdyyF/TwKhV03aDdaqs0pl9Ro26eUa1WKYqcXt9JstQormlU/CpJnOD7Ps4WxU+rVjGBd6CvnN0uE+pj3BLjp2kazWYToQk816XdbpHGCRWvouBx7Taup3KzzWYLTSjPvt3pEIVBCfbIaTZHsWwL27YZ3bQJWRR4XoUg6NHpdHBsGyE0mq0WhqnKi1vNFlEcKxhdnNBqtbAdF6OM54HEdRRrSBSGfSBttVodMLhXrtxRKvLyyUMPDX7eaaedVFGZlGiaTpamquZK1xUGIY6RsigRSMoRApCFJApDhRbTlPNTSNAMZUMmSdrHSMRxrEps9C2cJF3Z/qp8RiALSRyp39I1nSTN+hA7WUhV7ampRE2axCALhoenDDyf8X2DcUH48SdMm64WKUgzFeoxS8dIShC6BsgS+aK8szzLkGW1ZVEUFFmGpukUEuIkRWg6mqaRZWkfzZ5nWZntUQ5PkqYIZIlFVEA9w1DTSJalaEKoMFKsMIWmYZBmaR9HKKUkzzKmTR+kr5ms8682uf/+Qe92t91375dZuI5DEit0UaNeJ41V1qZaq/cdU9MwVeanVLhao4GUkjhJ8Csetu0QJzGmaaoRuUSI1UsQeJLEuK4asMIgBCTVeo0kTUjTRMHjBMRhgGXb+H6VMAopColfhh3DKMLzq8ybN29c3yb2d0A577138ODuu+9O0FMB9nq9QTyW+alWsUyLXhDgOE4/81MUkqFGAymLEmldx3ZswiDAtkzqtZqqVUlT6jWVDo1KpHWlUiEKAwTQGBoiSRKVk63V0TSNXtDDshWyu9frIoHh4WHiOCZLUur1OpZlEoQB1VqNWbNmD/Rl/IN9NcpY8dyY1Ot1Zs2cRZomtLsddEPHMA2aowrfYJoq2RFFEYZukOUZ7VYLw9CxLJt2q6XSmpZJGMVEQaBMIUHf+bFsm3a7U1ZWmsRRSKfTxjANdN2gNTqquJUct3TIEgzTIksT2q2WIl0QKuNU5GoUNw2jP/Bt7tvE5zOgnLfcMnjCrrvuSqMxhGkYZWpRxbaiKFQdLg3jTrutatBNU2VtColpmiRJTFhmiEQZxBWAY9sqjpnEGIZJlqUEUUghZd+BogQRRGGoOlwyUHR7CmJnmmaZmSrjcnFCr/ytadOmUx0X2Pz1r7dbJ14xsnz5RNNrt912K2t+FK3MWLjJsZ2S7EJNtV7FQ5ZJEbesQgCwbafPWyVKsE2xhYNj6AokbpoWruMCqvrB8ypqWhYaju1glOlMXdfxPHUeAmzHRjcUE4hlmbiuy7zddqW2BaI9yxT36ngZp5yDRPS6rrPrbruWF8jwvAq2Y6viNl3Hr9XIS7Yx3x+D0eXYZcYiTRLlTNVrJdpFOT9j9pFpmPhVX4V+SgQ1Upa0NWqaGcOI1qpV8jwjL1QcTQhBXuSK3NSrkJZsI361yh577DFQx/7YY4pz/tUuUsIvfjG478CDD8Z1XHzf79f1+LUqcZIQ9HplXY9yfnTToOJX6HW6RFGE71dUZKXdxvWUkzRWuelXqwRhQC/oUfFVdLzT6WBZFq6ngOR5nlGrVonjmF6vh+d5mJZFu6WSLr5fpdcLSJMUv1qjKCTdToc9dt9jwN686aaJnjqMU87R0YlTxz4L9yXNspILKVapLtfFMHTVCKEq/TrdjvIYPY84SVUKy1ahi2YZCnA9l14vIAgDKhW/HO6bmKaJYzu0W23SJKHiq+Bxp9vFdtUIMDq6SZEwuAo3GJeQPcUt2cKyFaggCkL2GMc2dsUV26MKr0z58Y8HZ7eRkRHm7TqPOFZ1Qrqhq2B4nqOVo14cxUhACE2RYMhyZkuzfrFiURQKL6FpChcRx+R5Xob1FOpdaAIpC1WvhAozhaWTpOlaab8qCiFNU3gHSihemqqs1c5z57JgHAX2+D6NyYQaovEnLliwgFmzZpEXynDWygKoPM8pirxEu4w5P6UjVObRda28UeXUUkhJnqVopcOUJIpRVNM0sjwreXtM8jwjK50wTdPIkhSEUKiYPCfL877DlJSVfbqmEccRC/ZS7d2Wzr8a5Y474OGHB/cdcuihZLkC+SIhjRNs16XieYSxgqzV64qkIo5jPL+iPPhYAWqq1SpxGJGmKgwki4I4jql4lbKCMkTXdGpVVZpd5Dn1Wh2BIC1LNfyKTxj0EECtVus/z4pfVbHpMMQwTfbb/4CBEFKrpci9JpMJynn55ROH2EMOfR1REODYjgIOhAFZXtAYGi7zrjH1uiqaCoIAy7JoNBoKdSKVg1PIgjgIqVYVYdRY1qBWrxPHCWmSMjw8jKZphEGA63nU6nWCXo8C2c8kRVGkYHSaThgGWKZJrVanFwQITWPf/fYfCO7ec8/knuCrVRRh7uDLtsce89lnn4V0Oh3SNCnXkoxpt1sqBawbtJqjyuSybKIgpNfrYRgGAsWtqhm6KiFut1Sphmn1Zy/DUFQ0rVYLTdOUM9VukaQJlmWpdSvbyvnRhCq6G6OwUYBzpZhz5sxh3333HWj7t789kQNqTCYoZ7cL3/nO4L5FixYxb9d5ICDo9WAM59dqISWYhlEGgmNMQ7G+dXtdVUpqmQrmnxcYlkkUx2XSXythb12V2bAUCWmcqA5LKel1O2iarhytTrd0ugziKCJJEwzTRGha+WYLDjzoIHYfxzZw7rkv/ai5556Kj/0735F861uSbaC5f17ygx/Ak08O7nvLccfhei6GYSoHpygUc7TnQQnYGCvPGFMcz1MgDA2h7EVTJS0Mw1DFbwJ0TVDxKv0aIsd1y4I5MA0T23ZUDZEQOJ4LQlET2baD4zrl9zR83+eYY46hsgW6IwhUPf/WZFJShfPPn1gJd8wxx6oYYlnXA5Ki9MYc1yNNVHan4ldI8wxZqIyCpilbxLJVMVSeqim6VquRZyl5GYg3TbOPAfQqKrgvQXndUgFGXM/FcVRFnyY0altkmabPmMFhhx0+QIn4yCNqJnip5YMflPzd3wk++lHBj34keNvbduz10xS+8IXBhzo8PMwRRx6FZZl0Om31LCoV2p02WZJQrdbI0pRer4vjOmWGqCSCrdXodrqEQaDut4B2q4llWniVCq2yFMSv1ojCkCAMVR2ZrtPtdDBNteLGGL623miQ5zm9bumQOQ77LFzITnPmDLT5a1+DZ57Zej8npUDs9RSC5/DDN+8bg/6vfXotvV6PPMvKWuVoc5mpUCx0uqaXzk+PLFUMFFlWcuzYFoZh0ut2FU1ipULYC1QWqIRG9YIeZskuEnR75Quh8vxhpLJAY/l2UVYHHnnUm9ltt90GvMAPflD0md12pCxaBJdeKjnwQDjrLPX5gQc2c/6MjAiWLJFMmSJ43/skP/+56K9yZhgKVOu6g1sJad1mue8+VSm7ZeHe7NmzWb9hA+vWrlMg7jzrxydlIft8p8oxioDSji9rfoxy1kviRGEfhEacxFCGEIuSMFYvM1BJFCM1VR2bZ2m/pCbPc+Ik7iPTZs3eiWOPPXZgpZRHH4WTT352ot+tko+fe+5ECsGj3vxmdtlllz5uMC9pZHKp6BbGCGMRCgibZxmapkI+SaLgUXoZRirKUuEiLxRPjxB9PCBjBVppSprnCvlScnSOqd5YKk3TNPZZuJDXvOY1A4p5ww1bN7RfqOy2m6IvPO00wSWXCL70JcE73rH5+MUXKyes21WLKSxbtvnYzJmKheQXv5Ccd57kjDMkv/qVZMqU59cGKdVaP1uiyXRd54QTlrDnggUKmJ1m1BsNlaKMYwzTpOqr/HhRFKoCNstJU5XrNi2TKIxUmLBaLSnTc+r1RpmGTHAcF9dzCUJVDlOv1ZUnXlLTgCCJE2zLxvd9atUaixcvZmgLNHtRqGVgnovDf6vksVkGy5cLTj5582psmqax54IFrFr1FL0gII5jbNuh4ldUOqskP4gjFYao1qoIoRGFEaapnJ9e0CPLMwW3y1LiOFJEULatnBoBQ8PD9LrdsrCuQZ4pRmPTtnBdr6QzEQwNDbPz3J057rjFA29lqwXveIeYFMyyLTJzpirrmDtXjXLj13Zst+Hzn1c05HPngucpBRwrKNxzTzjjDMlrXqPKeZ9+WvD005u/e9NNgr32gjPOENxyi0BKxeaxJavdtsgzz8CmTWKAzkXXdfaYP5/HHvsTcRwRBqFyXEyLQhZEQdjn3gxLhg7btgnDiKS09xGUTH4apmURBqEqwbBMxRkQx4oSSErCIOjzsI4x1RmGGoCq1SpL3vlOdh5XbH/uufDv//7cvsBzcsJ/5SuSz31ucN/GjRv50Q9+QLPZVBQ1UjHRjBVR5XleYgVRuVrdUHGwsp59jIEiSVLsckUwlVNXjtEYAt8wTBAqAaAQRqIENivmirm77MIJJ5wwYd3uU04R/PSnz9n3rcqXvyz51reU3f2lL0k+8YmJN1LXFc/PZGSy3/ym5J/+STzrgqVveQuceKIky6DZhH/8x23jSZ9MLrpoIvt0r9fj51dcwfJly/pAmHarDcjSplcREsuysB2HdlvFrGv1Gt1OR5XbuK5KRUcxlqXMrFa7jYagVq/RK00uy7IV1WEQoGuq9sjzfU488UTmjLMzb7kFjjlm23j7n1M5DQN+9Ss5oaB/dHSUn19+OY8+9ihIqNZrxGFUetvKY+y22whdp+r7qgRDaPh+hTTN+nQ01VqN5ugmKDsc9AKyIse1ndKG3czZ2WqOUkhJrVpj57lzOW7x4gmKecEF8PGPvzAP/ZOfVOGndhtOOkluM5WNrsMHPgAHH6yU7t571fduvJFnZVl+oWKacNVVE9e2zPOc6677Jffec08/Vul6Hp2Sl7MP9M5SbMdFIInjRPHF+xXa7TayKKjVVJlwkqRYlqlChr0AUWaB2q0WhZRUfZ+8KJg3bx5vPvroCfHmpUvhsMO2fUZ7TuUERez1619LDjhgcH8cx1x79dUsW76cKArJ0kwtAVLCpyzLAglhWZqq0lld8jTFL0uI1aoOZgnJUt+r1pSS5nnWB72mZX7ddmz23W8/3vSmwyas1HDVVWqlhhe6YJauq0Vm63W47DI1so3JRz4CH/6w5Le/3bzvM59RRF2axoR7BEoxxz+Qs85S5LxjdtfZZ4s+Y932SLUKN9ygVmneUvI859577uHmm29S1D9AHKtsj+24xCXdtqErQoWiKErOI1GCx9WyPFGouN/1cr0iCtmPf8Yl8LtRb/DaQw/l4IMPnrBY1qOPwpFHPr8lIbdJOUHZYTffLCfUf2dZxl133cWvb76ZsIT+93qKbrtSUbboGDGXYRj0eqUn7jj0ut0SkW2TphlRHOGUacgxFLwig4opgFkzZ3LkkUexxyRrLt54o1qHaEcslPW616kXMs+Vgo4PR33yk3D++VtfwOC1r1Ur9f77v8N3v6tG3vH25IUXSk47bcfGYCsVFUWYbKGsdrvNzTfdyH333qfY+bJcESiUg0ar1UQCQ40hlTcvchXfpBxchFpup9kcpQCG6o1+saLjuizYcwGHHX4408ehjQAefBAWLxasfp5r326zcoIqr736asV1Pl5GR0e5qey8EIJKxaPVaiNQscpOp9NfHSMvcqIgROia4ihvtUBKVSQVR6RJiuM4qoyj06VSrXLgQQdx5JFHTlh4CRS19skn77gV3L74RckXvqBswHPOkRMotOt1FfoZHwsek69/XXLmmcquWrRI0Wj/8IeD55x9tmTRIvojyQsdOcfEsuBb35J86EOTH1+1ahV333UXS5c+qDg4c8W4ognFOJ1lObIEcIdRWLIfOwrgUyiSLpWLz7FtmwV7783rX/8Gpk2bNuk6pVdfDX/912JSYMdzyfNSTlDkC9//vuSd79x65++683c8vHIl3U5H8e+kKXleYNlWWR2olhHUdF3l4Yu8X52ZpCmWqTCAtVqNBXvvzWtf+9p+anNLkRLOOw/+4R/Ecy7D8nzkPe+BvfeWdLsCx4EvfWnw+OLF6j5cdtnk3z/iCLWAwVNPqbDTZz6z41Y43lY55RS1aMPWslPtdpuHVqzgkUceYc2a1eXiZDlRHGFaimK73W4hi4J6Y4hupwNSMmVkhOkzpjN3l3nMnz+f4eHhCUsJgor2fOUrcM452/9snrdyjsnppyvO9a1RJrdaLVauXMmjjzzCqlWrFNmX59FpNkFo1Go1Ol2V1qyUtelRHDFj5kxmzZrNnvPnM2v27H6563jZuFHFGq+9dntav3XRdTWdz5yppvbJEPQLF8JHPqKWZklT+Kd/EpMUCMKUKSo8NP4Of/zjai3It71N2Z2jo4pPfkfL7NlqVZDxyw6Ol263SxiGrFu7VjFYl0BvURJ42ZbNyMgI9UaDmTNnqvUwJ1mDdEx+/3u15Pg4JsrtESm3d9tjDymvv76QRfHsW7fblevXr5crli+Xt9xyi7z+uuvkVVddJa+5+ir5q+uvl7feeqtc+fDD8umnn5ZhGMo8z5/1epdcUsjp07e/3c+2XXBBIb/85ULuvvvkx//n/9z6dy1Lys9+Vv39/ver/48+Wsrjj998zmteI+XZZ6v58cILC+n7Un7964XcZZcXpz8g5dvfLuUf//jcz+mFbitXFvJv/kZKIXZU23fARd79bikffPDF7/zNNxfyjW988R7i2DZrlpSf/rRS1Le/ffDYN79ZyOFhObCNPQzHkfLf/k0p3g9+UPQV46STNn//iCOk/Nu/VX+PjEipaUpZFy58cfskhGrLjTcWMst27HP53e8K+dd/LaVh7Ng2T7oOkecVxLEgz7dtqrnkErjsMsGSJfCxj0kOO2zyhei3R+IYrr1WgVFuu23HXPO5ZN06lbuePn0iAZjrqjDQlvL5z0+c1rcmd9yhVpDYuFGwciUcfbRaPW68XbujRUrlnFx9tWDOHHjf+2DxYrWm6fNlQslzxVX/q1+pxb9WrNj+du2yS8qcnTPWP6OzYsVgQwZszsMOC/j8WRuZNy8lSQRXX+3zT1+ZQqu1WdNqtYnUNUUxmOLbeWfV+WOOUZ79+LUZn0taLZVJuP56waWXvrQ151/8omSXXeCXv1SLXcXx4PFvfEPyyU9O/tKaplpaOggU6VYQqH0XXji4EKnnqcUK5s2TPPqo4JJLJv7OSyWep1bwWLAAFixQfPO+v5nxrdNRMMrVq+HhhxWQ5ne/G4z9jhfDGOSm6vUmsq1UqwVf+OIG3vGOzYsw3Xaby2c/M5V169SY2VfOJUs6nPe19TTqNYUiynOazSYrVsCSE2YTBEpBzzwTjj1WMjKiFiJdsUJR2Rx//OQPzHXV8iR77QV77CGZM0d13vfVG9jtqu3xx+Ghh1SO+r77eMGB9O2VnXbiWT3rqVMn5tr/IoOyaBH84heyX7Q2a5bSsuOP3zzDfP/7T3PUUSkjIyM4jkOSJGzYuJEHH5S8/W2zyTIBIKWuS/nb3z0uN2zcOGBLpGkq//T44/LUv21OsAdOOEHK732veNHtv79sr75t0SIpr7tuUDd+8pNCnnKK+nvvvSP5yKOPyiAMB/QtSRL56GOPyeMWdyVIqQHMnZsydWqOP46DTtcVx82iRTsouv0X+X9Spk1TSK2xDNEe8xWjiDMuDmkYBpZlMX++sgEMgDhWU/J4Mk+AQsr+8b/IX2Rb5XWvg7vvlkyfvjkWPMYdsHGj3keXbRnAl1IxA27coPZpAKtXGyxbZtMct3yrWlg14L/+axyr55+xVCoZn/rUw5x++iPY9uSGr+vmvPe9T3LUUVvPNzYaCX/zN4+zaNHWV3i1rIJ3vetJFi9ewyR5hle1/Pa3sGiRYJ99FHRwS6f2rjsd/vQnk40bNw4MiKOjo2zcKLn++r6+bbYD7r3vT3LVqlVy46ZNcv2GDfKxxx6T3/rW2kntij9Xm/Occ5bJTZtG5bp1G+RnP/vQpOecd94Dcs2adfLuu1fKxYvXTHrO//2/98j16zfIW25ZKhcu3DTpOWefvVw++eQauXTpn+Qppzzxsvd9R23jbc4FC6Rcu7aQs2dvPme//SL5hz/+ST7+xBPy6aeflk88+aRcuuwxefTR3f45/TjnsmU2bzt+Jz7xiU3ss7BLp63x8yun8NOfbLEQ5hYi5dZROa9mGRnJ+sRVM2Y8Pek5M2dKZsyYyvBwnQMP/BPXXTdz4LgQkqlTdaZMGWa//Qz237/JAw9MJN2fOzdlp51mUBQF+++/gh//+EXp0ssuK1bAt78t+O53JW9/u5oi7rvP5i3HzuGvTuqwyy4pa9faXHG5z5NPDqRFX/437ZW0LVq0UV522d3y0kvvknvtNTFKAVJ+6EOPyRtueFBeccXv5fz5rUnP+fznl8ubb14uL7nkbjkyEk56zkknPSWvv/5+edVVf5QHHrjxZe/7K23bbuDHn7Pouio9KYqtG4IzZgT0eiadztYBEHPmdNmwwSUMJ6J2xmTatJAk0Wk2X8WE9S+S/P9eQdsIp1C7PQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/runing.png":
/*!******************************!*\
  !*** ./src/media/runing.png ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTI5VDEwOjAxOjM0KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTI5VDEwOjAxOjM0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yOVQxMDowMTozNCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OGUxYmE4ZS0yNGQ4LTk2NGMtYmQ5NC1lOTUyZjBiNWE2M2UiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0ODg4MTkyOS1iY2RmLWI5NDYtYmY4MC00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";

/***/ }),

/***/ "./src/media/servo.png":
/*!*****************************!*\
  !*** ./src/media/servo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/servo_7d54f34c.png";

/***/ }),

/***/ "./src/media/sr01.png":
/*!****************************!*\
  !*** ./src/media/sr01.png ***!
  \****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/tank_matrix.png":
/*!***********************************!*\
  !*** ./src/media/tank_matrix.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/track.png":
/*!*****************************!*\
  !*** ./src/media/track.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/turtle_bluetooth4.0.png":
/*!*******************************************!*\
  !*** ./src/media/turtle_bluetooth4.0.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/turtle_buzzer.png":
/*!*************************************!*\
  !*** ./src/media/turtle_buzzer.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/turtle_ir_avoid.png":
/*!***************************************!*\
  !*** ./src/media/turtle_ir_avoid.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/turtle_irr.png":
/*!**********************************!*\
  !*** ./src/media/turtle_irr.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAABQCAYAAAA+whbaAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAHcpJREFUeJztnXl8VNX5/9/nzp2ZTDKTTDayAUlIwqLigohii6i4YBHEqhVRccPiUuVbS0Ft9YdSBLeCFfXLV+tSREHAqiytVopopVpwgQIKZAJkT8iezGTWe35/3Cwz2UjCBIn6eb3mlblnu8/Nfeac5zznWQRAcerQhKjGmkeNXs9YIbVEkAo/4sSFotT7Daad3gjzH+PLij475vEqBg5Mc0bbv5Agf/ycGJ+AQZUBg3rUdt4IS2lVUurkY+UBUWdPfNlWc+SWjio906fTcNNNuDIzCagqGqBKiamujqitW7E+8giiuvpYafjBI2A0+aunT891Tb1C+jOHxBEVGY0mNeF01ql791bZ3lwdEbNpfZaQsl1fl9X+VWRDzVkCAr29v2i0Ru+NaKgbEVzoP+MMKl5+GWd0NADJSUmoqkpxcTFaECGqEMSvXo31gQd6e/8fPGomTXFU/+FRixZtSwUK/AbDeFXTJiHls8HtDEXFBxNmzzZZv/oyLbhcM6haVcrACxMLD23tLQ0KUsYEF3imTaNw3boWBgAwmUwYjUaE0ioqGI1GomNjqZw+ncr33wflRzGipyi9/8FvK/+0JKOJAQCODEtPP6TAzjZNN/rTUleUrV5lq7r6mgPBFUrAryh+hhwLHSFvzn/22ZQ89hiBNtNOUXExhUVFBAKtM060zYY9Jobo6GhqsrOpXr36WOj4weHIrTNznbffNgwwBBWPcuTl7dKkfDe4rRYI3JuTlfX/UJSvqhcvGlw3bvyhkMHksQnyIZ3LXn2V2Ph4Bg0ciMGg02Y0GomJiSExIYHUlBQSEhIwm83U1ddTW1dHfX09AFWjRuGZPv1YaPnBoDEzq6J+3jyrQVFOEnBVc7mADwQs1hTlMqS8UMB8oFwYDE8cyMt7ECHGIoS54oXnIv2WSG+46GlhAueDD+I2mVqmfoPBgM1qZWBaGvaYGCIiIoiIiCDaZiMtNRWb1UplZSU+n69lsMoHHwwXXaFoXpoMBoiNBau1fZuYGL2utxACxo7tff8eoGLBo+WoSmNlZaVDSrkL8Am4ISsr69KsrKyVQzMzP8/Ozt6SlZX1iEFRhgmwCykXAiYAabEMqLzvvgNd36X7aGGC+quvBqC0tJTCwkIMikJiYiJCiA472u12YoLkBoBGiwX/mDHhoq0FMj8fUlNh9mzkl18it29HvvZaa4Phw5GFhcj165F790JiYs9vYrEg77orfER3An+U1es75+wMCZn22NjdCPGpgLlZWVkrO2qfmZlZ4/f5rgRyg8udV06NkZ28m55CAZBmM40xunyoaRpen4/YbvyqYmNjEUJgNpsZkJiIyWTCddNNYSEsBELoH6MR1q5FXHopXHttqzBqNEJBAeKnPwW/H0aNgpQU5MqVyPfeg5EjAZALFiC3bYNJkyAuDvnKK8j16+Hcc/V+FgvYbMh33tFnnbvvhsmTYdQo5Nq1yDVrICkJxoxBLl+O/OCDHj9Kw4SL8qUQkU2XQwFPfn7+sq76DB8+vB4p/9B0uRwpZ8nY2PjG9MyqHhPQARSAwPDhaMGFikJERMTROze1s1qtWK1WoqKi8GVkhIOuznHjjcgdOxDz54MWRHVGBtLhgLIy+Ogj5Lx5cOgQYts25O9+B2PGwJQpiEsugd27kbNng9OJ2LQJ+fDD+kufMAHq62HgQBg7FnnnnbB/P/KJJxCbNkF1Ndx2m84I552H+NWveky+NyfbHVIg5fsXXHCB/2j9AoHAxqb2C7Ozs/8PKXf6crJre0xAB1AAtEGDAELkge7CYDBQW1NDdXU1dXV1aDZbOOjqHCtWIB59FHnhhaHlhw4hLrsMzjwToqIgPh4GDICqKsSLL+ryQkUFNDRAYaFeHx8PgQDi2ZAtOWLdOuS99+qzw759+qyRkYHYsQM2bdIb7dkD+/f3mPxAfLwEJFJuBaqBsu70GzZsWAXgB1Y4HI5lCHF2ICEhLMKhAqAcPoyiKKSlppKWmooW/As7CgKBAP5AgOqaGgKBAEpdXTjoao9mZSnAK6/AWWfBsGGtdaC/lI8/hptuQqxcCT/5CfLiiyEzE7Ztg8GDkZ9+CrNmIV5/Hc44A3nRRTB0aOsYAGvWwFVXIdauBUC8/DJMnoz82c90xulAc9ddGI4cUYBV2dnZ5wuYKYRI7k6/3NzcAYCKEOMl3A0IQ9kRc68JCYIKoO7bB1LicrmQ6C+20e3GcpQlIRAI4HaHzm7GQ4fCQVcIRGoqOJ2wZIkuqHq9iLQ0aL737t2Is87S215zjS4reDyIrVvBboeSEr1uxAiIi4Pycv36tNP0l1pcrF+nNSnjcnMRdrt+T4BlyxArVuhLRlUVKApi8+ZePYtpf24EcNr+gwdPR9MmSJi4Y8cO4+jRo31d9RNCXN6G9aTRkRvTceueQQXA6yWyqoqyIA6vrq4mIjm5090BQHVNDaqqYjQacblcAES+9FI46ApF88sI2o7SdL8u2zQ26p9m+P0tDACAx9PCAO3GbNJ/tKA2aPnVtNBxewDrls2DqwIBrwJfNf+37Xb7/wBPdtbnwIED0cDvgc3AAGCkqKwsisw/NLBXRLRByxbR9uabIRVut5sjFRXITqa+ZhlgQGIiyUlJmM1mIp1O1K+/Dgdd31uoLqfRtG3b4ZBCIR7Lzc3tcFv1zTffxAuD4V0J/qwhQy6WmjYBIHLN23XHsiyF3L4xylYU4axPBSjes4fGiAiEENhjYvB4vXi9XqJtNsxmM0IIvF4v9Q0NeDweAGLtdiIiIig/coSUX/8a81//GhbCvs9oHDi4umTLZpNUlCjggIDnpRD3IOUhpFwhpdxnMBismqaNR1HuQMp4wIWUVwshhtLQcH/6mLPjDR63EaAqKX1mfNnhP/eWnhC18YDrrsMAREREEBsbS3xcHH6/n6rqakpKSyktK8PpdLYwAOhLQklpKfYvP/mRAboJS2F+bPT8R0vQdwnLsrKylgIvABcixCtCUbZpmvYM8PMmBgCIRIhNaNqixF/O8jQzQDgQwgTqrl2k3ncffreb6poaKisrQxonJiSQkpJCVGRkSHls1W7sN94YLpp+EEhYuSLb+qfn9hEI3JObm/tbpAxWOtSZzeYzIyMjRwOtgkogUB9335wi2+efpYeTlnanT6Z33yVt8mR8DgeuNsKPx+PB5/PhbRK+VCD5k1eJu/wKcIaTrB8Gkp754/CEu39lEDU19wLBLzbS7fONc3o844AIAMPhw46UK6+ut69/NzvcdITIBG3hufJKGmbOpDE7G7/RiJQSg5SYq6uJ2rKFqAULEG2l6O8Art9cj3fUSJAS+9d/67hN+ul441IhEMA+43fHmcKuoalGrerqqx2un//cF8jOjpVRUdESGaC+vt68c1e1ddXqqJgPP8jsyLIIjl0m6JIJTngYjeDzUf7JKupTRgOQkfRXDEr77Vtx5UU0egcghMaQrKHHm9IeQTOoICV1t91Kw+WXI7xeRCdbUkNtLe4RJ+8IZKYfDC6XQrgAT9v2UsoAEKLRU8NI+/GBoiBXrUL85z/6vv7550OqvX4bFlP7f5gv0Mfq7DBCCehHCf7UVDynnNKdLqObPq3oZNboQOsT6H9MoGmIJUv0c4Dk9hpXTetYyxnQwqJh/T5C65+GgaNGwaFDcNJJ7aok7Q+/pBRIGZ6z9+8h+ikTWK3Ip56C7dvbVZnU9kfsQkjMxh9N4zvBcVwOLr9ctw7qDjZt0o97O8Pjj4esbQlXziIhSl8GOjvFTItYijQZITya1u8TtOPGBHLOHLZHRR31GNZmszEiP79rJmgDpaIWKrq2rxA0diQUnZDwJyVRe/PNeDpY7voAx48JgG6dwze2PR3szrAREWgGA+6j2NxZpEQAwnkCaLbGjIFBg2DjxtYj8SbUXX89cUuW4Bk5Em9ODq7zzsN56aV9RclxZoJwYcIE3VLos8+gsJCG99bzTbSNu2be1mW3Ne++hz02DvvgQYiGhuNEbAfIzkYuXozYuBFuugmWLw+pFm43wusl4osvkEVFGJKToYdMYGjrDNTmByKl3KpJuU9KWdX/mEBRkBdcoGsqExPhhRdCqoUQzLrrbj7+aAsDBw0iymrl7xs30tjL8/8+QWEhHDqEvPJK3VayE+y/cQaHL72EmORk4jttFQqzyUxUVBRud9fPGwgENg4aNOhJ6I/KIk1DrF8PRUUd6gmEEIw8/TSKi4oAmHHLrXz6yScnFhOMGAH5+YiVK5EzZyI+/LDDZuXnnqsb+mhat5lA6aY7YF1dXWbz9/7HBIC89lpITkbcf3+7Ok3TKCkqJjFpACXFxXy2bRvlZd2y5WwPixkGD2hfXlQBDcfAVDt3In76U+TFFyN+//tOm8Xu3k39eeOIVLv/mjweN16fV/cd7aJddHT0t83f+yUTiF274NtvdfvB/HyUwgLM8fEMTNJnhleDlohd/9neUq7mF6BUVYeaqneFaZcg//xuu2Lx0O2wsNfnNfr9n332qLuVk59bRto/N+O+5BKc997bvaGlhEAgxG+0E5x0wOFYDJT3Sybg1VdDLqNuvZXTgHeO1q+XxqHfBfzJyfjS0/HccAP+JpeAMGOWACTs7J9McLzg2IfwrgIRi8QCqAgaYN+uPr1t9FtvcWThQggE+nJr2AxP3zKByQRz57J98mTC5TfXETy33kp5QgJrc3O7bDdjxAgiVRXLokXg7cBvY9gw3dk1LQ3eew8aXRDQxwyhvq4mfMR3gNoZMxjw61/juuCCPmcC0ddMIFevZnta2tEb9nTcJUsQ77+vexqtW4d32nWURNtY2aQnMBqNCCEIBAKoqtpiEzn1ySdRYuOIePppREdMMHkyHD6sey6FCxkZusp82TKYMwdeew3OOw95zTX6ruCll2DcOOSddyL27oU//AHhdqO4XETs3MmAOXPwDhtGze23h4+mUHj67gDpnHPYMTAsZvGhEALx+ecQEaEzQRuYTCaeeuYZ7ps7j7kPPsizy5eTnJLSvbE/+AB56qnQyZatV8jPR958s+71fMUVICXyl79EzJihP4PBoPs6zpyp+0DEtPqTqIWF+Pfvx1/ay91NNyDB3XczwciRx+Su1SmkhJQU3RmkA19Ar9fL4UOHUVUVVVWpqqik4siR7o09fjzikUfgjjt0H8RwQNNg82bko4/qGsKkJF1Z5PXCunWgqroTjMulq5CDzPV233MPheeNJzLaRvjn0xb04XKQn6+rKvuAEeQpp0B8POLhhzusX/fWahRFwe/3k5KahsFgwO8/quOv7tH8m9/o288wQrzxBnL7dsjJ0ZVcgwbBww8jJ05EjBsHxcXI+fNh0iTExIkt/apPOpkKdyP2CHM/ZYLNmxmycCGOPmAC8cgj+i+oySQ+4pmlZMTG8tv0DL2BBAIaCAVKShifrC8H8QsWYBYC4WlneqfjrbfCTiugK4fOPFOXNwAxZQqcfDLiqad0r+gbb9Rnzj/9Sfd1bELyv/6Fa+JELH0oVNOnTOD3Ez9lChVvvEFtGz+FY0Z+fsilceNGBgDXhvcuMCgTaZoOSjyISMAIsg6R8xV80MNoMf/9b+t3txu++KL1OhCAIPc9adT9SnJWvs6gD97Hfc45VC5degwP0jn6fHdAcTHDzj8fAO2jj9gRbmboa8TYwdAmOpyIBntcn9428uOPqZo9G+PBg/jT0vCOGHH0Tr1HHzNBEPpkQouKAqcT15NPcTghgafeXttl8wU33oTNYsF6zdWINmf4HcJRAN/+o335nq71EccK4fWiWa34MzKomj27T+/Vt7uDvoLBgHzmGaivR+TlwYsvEjjtNOqjbew8qJven3LqqRQWFJCekUFlRQVer5fysjI8Z47CEhunyxPdwcdfI04Kg7LGZtOPvfPydF+J2FjdRT45GUpLYcgQfYdQUgKahvPSS0lYuBBnkJDYhzh+M0HY0BxeZt8+GD68XbWiKNz/u99z8GAeg9MzWLPqTTIzh/Ds0iXfAbHAZZch77lHf+klJYg//xn5738jhg9HvvQSYsoU5JYt+nYxOxsxdWrLLKWWlBC9ejX+pCRcTctqGLEbqFVgX/9jAtD/qZqGWLWqfZ2UKAYDdbW1qKpKRmYmO7/+6jugsomeG25AzJql2xCYTHphYSHy0UdbGx08iLjvPuQbb0B6q0uiedcuImpqCYw8pdtMIIRAURSMqtplgJFAIPC/gwcPfg766VEyFos+pXfwkFJKbr/5JpwNDURZrUhN61EMprCjvFyPiWQ2I+fPR1x7LWzdqi8JwaeDQkBCAgRZS389736OjDwFiy2abuo8UVUVm9V2VMsiRVFavHT6JROI20JtCaPuvINTIiN5XTRpwZ0uXUfgDDJaFQppU6diAEQvjFl7TevixciHHoKEBMQf/wguF+LAAVi7Fvn447oyzeVCvv66HkwrKBxAzfDhlGkaNi3QbSborkm9x+NpiUR6wjGBoQdWNM1QHA4igfYSwgmAsrL28Q6few4AcfPN+t+f/azDrraDeSSOOAmz6P4Rj8/vo7qmGpPJhNLFcmAymQqavx+/LeKmTZw1tJvewD3wOWi9QTc3oX1xnhFmaDYbCMGoBQuoGTEChgyhqgfKIillSDSZTvBirsPxooTHj99M8MQT4dcVpKfD4cNBrumSIclvIUR706rS6nE43YP6hWu67d13qbz/fkwOB9rAgWhxfaecElL6T7jloDuQzz+POHxYF6JCTM4FvkA0JrW936HPH92u7ESF6dtviX3mGTxnnEH5okV9ei8hhK9fMoFYvhy++UY32GgDnz+yQybwB/qXylpxuVCbgnD2JTQhfP3PK1kIPUp5VBRcdFG7aompfZkUaDJswb6OH47D1lZomr//MYGU8PXXusKog5Q7imgvEAkhUUTYEoUcPxwHIVb21+WATZv00PNNiNz8Twxn6ufwlj2bwN/+hSdk+vFGJyMC36HiqKc4DkzQb2WCtrDO/z86SIgTAhs9T1DxnaNvmcADuISUzqNGL9MSE/Fcdx3+zEw0mw21oADTli0YP/64Lwn8wUEzmQO1F1yQ7x19VoOWNADp9UulvNRoLilJNh/MixVSIlwuhC80GLpSX0/V6aMfqHty0Vv6OCZpESLEJr6xsdE/fPjwTmMNdjoT+C6+mKrHHsMZH9+SCKPFqXPGDExSYt+wAdvcuR3b8P+IbsFvtbmP/HZeXuO0a1KlqtqlEE8LKacCF4EeI1RUVhbELn7CY//ruuyOYhka3RwZOnRoXm9p6FAwrFm5koLly2mIi0NKSWpKCinJyahBKl2vEJRPnkzhrl34Tz21t/f/QcM14uTSgk8+qXLdcN1JUlXtCLE+Z8iQ56SmLQxuJ+PjzdVPPm4oWLV6XyCMqfCa0Y4JKv7xDyrPOSckxH19fT1OlyvEydFmtZKZkYExNpaid97BP3p026F+RBdwjTi5tOSdv1qCsqOClFfm5uY+JAyGx4LbKkKM0TRthG/0mdGFGzYUBIymbphOdx8hTFD33HO4hg0jso0tYFV1NdXVTYcSTf7vapOXj6qq+KWk9I03kH2d/+h7An9UlKf09b+4hWqYj5TBJs5WhJgqpHRIWAcUAWiadgaQJSDan5GeVbp0adhyIkKQTKBlZFB52WWkDhiAyWSiqLgYr9fbkv+w+eVLKWloaKCquhqn04m3SR7wGAzULluGvS9S4n3PUDF3Xq6020uzs7KW5ubmbgB+AWxXhJg5ZMiQFm9XKaXIy8ubLoV4RQhhb56b3RMvzXGOPK046r87wxKOuGUmqHn6aTQpcTqdNDY24vf7SU5KItZuD4l+IYTAZrORmpLSzge+Ztw4pDm8kUPlhg0wdap+oarIF19EPv+8no+oH0IzmQPOa3+RBpyXm5v7B2AZsD3SYjk/mAEAhBAyKytrZVO2k2AjCLVy3tywecW2psltEu6ak1hER0djsVg67Wg0GkmIbw2iYjAYCEiJu+mMPGy48MIWCxy5dClccQVi6VLdVr8fon78+HyMRjtgRIjfIcTFSHlrampqp5YuOTk5XyLlYgABXwNb/GeOStZUY1g0X3pexMREvG1i3UR3Y32PiopCVVXsdjvpgwcTbbPhnjAhHHS1x5w5cMstiCuu6FU+whMF7rPPDg2bJuV/srOzdx+tn99k+jO63dD5WUOGTJBGY707PSOMGVJPPjmkUFXVbifINJvNLTsJCQTiuxtiqfuQl1+OXLgQMW0a/PvfoZUXXojctg1ZVKSnxB3S5Cxy883I4ORel1yip8S1WPRDqNmzkXv3IvPykM8+2+rhbDIhX3sNWVKi51DMyQnrs/iSQ5dxIcSe7vQbPnhwMUJUAdPz8vImIUSSb9DAsARk1H/+TS88Li6uWzmSgyGA2tpaDh0+TH19PbKb0bN6hOHDdYVUXht9SE4OcsMGxJo1iEmToLIS2ZTQku3b9XzKTfkS5UMP6e5rjY1wyy3IBQsQc+Ygpk+Hc89FLlig95s0CaZNQ5x7LuKFF0Js/sIBEfCBlO9LTYsBnpFCdF91L6Uq4XkJ64EIvP6wCEYKgGHvXhRFwR4Tgz0mBq0HFrqept1Bc3u1oiIcdIVALFkCO3Yg335bD1bVjGZ//2HDkHfcoUcZOf103XV9zx749FPktGl6QuwxYxBPPAGAnD4dSkuRU6bosQPcbrjsMn3MPXugthb58ss6A1SFZcZtgVpULICCnJycOqR0IGW3FCx5eXnDgJBkmMbCgqMdmXSPJgClpARDIEBpWRlSSjRNo76+npiYrhNwNrrd+Nross3/+lc46ApFIIC47jrkF18g//IXxNSp+lm72QwVFS3pbBECVqxo8fEXL76oZ0ofOFAvb/IKxmyGXbta+/3tb63JL/fvR4wYgfztb5Fr1iAefxyaZ4kwIPKfH8U1zLp9Zq7DcTa6bazR4XBMyMrK6jKqlpTyXvQVVwCIBmeZpSA/KRw0tczdUd9+i8vlajkfqK6paUl41RE0TaOiooKYmBiSk5JQFAVFCCx9kSEVoLRUn7onTtSznIMeUSQtTc+F7HAgL74YuWiR7tIFes5jqxUmT0YsXtw61ocf6rOD1wtFRcg5c5BXXaXX/eQncMMNiAcfhDffRI4ZE9bHsH75n1TR4CwFRgJGAAkv79u3r9MQBA6H4+dSiIlGVY0XcBWA6eNPjggZnmPxFiawz50boj7UNI2SkhIaOggG7Xa7KSouxufzYbNaiYyMxGQyYd+xI/zBow8ebP2Vbt2KmDcPpk+Hc86Bzz9H3H03cuFCpMOhbx/vuKM1VW5jo+7yvXYtBAW1Eo8/Dhs2IP/+d+Tu3dDQgHisSVPr8yF/8xtkQwNccgniyU6z1/YKQtOIfu754JDsLiDfoKqfOxyO6/bs2dNiGrVv376EAw7HIglvIaU7Ly+vXkpZJjTNGb/osbDFrQg5Sq55/XUqx47FaDSSmpJCY2Mj5UeOoKpqSIZUb9CpodFoxGQy4W1oYODYsSjdDQ0Tblit0DZo9ciRyC+/RJx6qm6T2Baqqn868lCOjg7xBgonpKpq+e9/cNCfkZ6FlHdkZ2cvdzgcy5qyodcBueip8IZBSCqXAiDe+sL/Hk566skWf/WwZki1z5iBrby8xZ+teZvo9/txOp1IKbHb7SHbR5/PR6PLRcqdd353DADtGQCQDzwAb7/dMQOAnkC7Mxf1PmIAAOH3KynTpg0QtXVFQoizHA7HYPTlASAayFGEuE7AlDZdB5k/2po/4Omn2gYsOCbrEwUhWp9W0xgwbhyR//0v+QUFlLaJCWyz2bBGRYVoEk2axsBbb8X4jw78+L9LqCriyy+7jB38XcJ0pNw26KKL7Or+A+MlHJZwXlB1QyAQ2Of3+3fS/IKl9EWueP3btJm3DQ+2KdAMqtRUDnIMEHX2xFdtNUfanfq4r7+eqgceoDH4hRuNWCwW6urrMUhJzLZtxNx11wmRILO/QgpB9VW/OFD7P/catZTkwbTOzgWARWhapLpz1+H4hx6Oi/pmT7vdgMtq/zqyoWa0gF7r0UXFwKFplrryDZF1Nad31CAwbBiNN96IPz0dLTIStbQU86efYl616riYRP+Q4EkbVOMafVZFIC3Vg9ejqAcPWaz/3paqupzt7egBX4Sl3BmdMCu2vOCoYZ27ggAoTcoaYPHWzzf6PGOFpiWC7H+m6D8kKEqd32Da5Y0w/zG+rOizYx3u/wNds6gETB72lQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/turtle_led.png":
/*!**********************************!*\
  !*** ./src/media/turtle_led.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABQCAYAAAAwR6rwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAHWtJREFUeJztnXl41NXVxz/395sl2ySTHQIJhEkoVkFFNqvgUpZWW9zKWykuVYtaKaXVp1KpvmDFKmq1asWtbq1bcW9FsVrkdUGtgoqgQBa2LGTPbJklM7/7/nEzyUwyIXvUyvd58sDcfebce+65555zrgCozT4yxRqqv8kc9M8S0sgEqXEYX2FogbBJ392amLI2vebAS/1tRTTkOfITPA0vJbmaj41bwmIhcPrphCZMQNps6Hv2YNm0Cb2kpL99HsahIARhXUdqutRbW4WQRrdFwyazz5OWdYe9ofp3/erKZc9+zNZcd0GXhidOpOlPf8JTWIim62iaRiAYbM9PCASwP/kkyatX96ffw4iCFILm+WeVen+8IBA86sgcIzExTWiargUCTlFR2ZD0yivBjL/8xWHyuBM61w2ZrS5nZt6crIN7/tPXfoUvJfWLBI9rQnSi+447qJ8/n8icG1NQgK7r7D9wgFAoFNNAos9H7vz56OXlfe37MADPMcdW1t99dzCcN7IQaJWGMR1AaNoHgDlSTgSD9bY1tzVmP/rQ+M5tuDNzb0ptqFnR1741pEyNTmh65hlqowgP0NLSgs/nIxwOt6clJyVRkJ+PlpVF5euvE5o0qa99f+PRdMbZpQfX/d3eRngEBDVNK9c0rRwIRMoJ+MSwWG5yXXtNauWdd+2UQsS0IwwjlX4gRrDzrF6Na9o0EhNiuUtdfT11dXXouo5o69hisWAymTCbzbQCNevWIW22/ozhGwn3tBkVTbetGSV0PTmSJiFZwk4JO4GUSLohxE3FDsftUojH/D84fcLB61Z90ak5QT8gfMm2ygSvO8/IyWH/++8zctQoLGYzlVVVBAIB7HY7qTYbJpNJDcQwcLndNDc3Y7FYCAQCSCkByHznHewXXtifcXyjELZYQvv+81GdTElaJKXcLzRtC5AGfCjgvrCmbQUQUh4npLwcIXQM4xGEuAYYCYRzz/1JdcqHH4wG8KRnr7U11S3p6zhMkf+47riDsJS0tLRgJCQQCoXIzc0lOSkppoKmadjT0khKTKSqurqd8ADNM2eSlpyM8Hr785v0Hpdcghw3DvE7JeTKhx+GGTPA60VcdhlMnIhctQqam+HDDxG//jUM9Zj6gPolS3dLW/K3kbLUZDLVhQ3DI+HOonHjVgkhZFTRT6SUD5ft2fN7hLgrKl2vW32DP2Xe3AGNo53te6ZMAaCxsZGqqipsNlsXwkfDYrGQlZnZ/lkIQVhKfIsXD2hAvYLNBqlR21xmJuLaaxFTp8LWrWC3w/r1iClTIC0NuXz50I+pD2hZ8CP1w2rax2HDKEXKjcUOx8pOhAdACCGLxo27TsIT0elGkWOcb3RB00DGoQHIzEwCJlNMRlpqzzJESkoKuq6TarNROHYsqamp+E85ZSDj6TfkmjXIt9+OTQyHEc8/D8cd96WMKR4CubluIzenAAApM4GRQohre6qnwQrAAP6NlGcB5d4f/LB6IGPRAEJHHBGTaDKZ0HW9Vw0kJCQgNMVANCEIZWUNZDz9hli+HDFzZpd0OWECHDjwJYwoPvyFDiexgvYOh8Oxv6d6bWV2IOVfi4qKXpTwcmuxI9xTvUNBLffERADS09MB8Hg8vW5ACIHT6cTj8RAOh0np5aQZEKSEefOQf/874tZbQUrkZZfB3LmIu+7qyN+wAUaPRsyfP/Rj6iVkenpEU/YukAXU9aF6DULcUFpePgUpfxpOz9g3kLGYAPTPP0fXddLtdgCcTidSyvZj3aEQbNP6RXQApsbGgYynd3j0UcQ776j/796NWLoUcnLU53374LHHEO++C3V1UFEBRvcq0uGGXlefAJQ4xo2bWVpamiWE+L9eV5ZyFEIUIOVS1VZtFxmhLzABaJWVaKEQdXV1SNRxzuPxYOvh3B4IBNqJH4F169aBjKd3cDphy5aOz253V9Yenf8VgmVPuR3DSCndu3eWEGICQhxRVlZW7HA4DnlZUlZWViwhZn+27N5t6q58b9C+9ySXlOD2eNpZfmNTUxdVbjQMKamvryfVZiMnOxtN0xBCkHTPPQMZz389rA11SXpVVb0wjE0IcR+AhFuklN2y2ba8PwLbJbzelhxK+ec/Rw9kLO3ET1uxIobNh8Nhqqqr8fl8XSoFg0Gqq6sJBIOkpqaSkpJCgtVKakkJWvWABNBvBFL+9niwU9KZpeXl9+zYscPSueyOHTssZeXlayX8MGQ2zyt2OOYC202fbS+z1tYMSKXaruEDaHruORqPOQaTyUTeyJH4fD7q6uuxWixYExIQQhAIBPD7/e0NWK1WrFYrLW43o2fPPnzB0wtIk8nYu3lzhZGZWQA4EeJapDwTGCvgL1LKTwGkEMcIIX6GlONURblcCLFdGsYTI84405/8+Y4R0H8NX4xuP/3HPybZ6UTXdUwmExaLmoiBYBCXy0UwGCQlOTnmGBgIBHC73YxYseIw4XsJEQppuef/NEGEDSfwatG4cX9GyhsBh4SbEOIVhHhIwOnthAcQYo2E9al33FkdIfxAEGuxEwqR+53vYC0p4UBFBdUHD8Zk29PSSE1NJSlK82cSglG//S3Wp58e6Fi+UUja9XlO1kUXN+P3zywtL/8dmnZjdL4mxJlFDseJCLEpKjmU/OBDO7PX/jlWMdNPdDHXEn4/2aecQvZtt2HuJMk3NjbS2NSE1+NBEwL7zp3kn3QS1nXrBmMs3zikvvv2mLzv/8Bq/uyz85FyRnSelPL7ZWVlU5GyGEA4nRWZS5buH3HzHybEb63viNnz46H15JPxLVxIKC8PIykJvb4e60cfkfjAAwinc7DG8Y2He+r0Cs95i5r8xx1nM+xpNqHrmvB4vObSMmfi8y9Y0l943qGFWuPaVvZ3z++R+Icx/JBCgBCIXiqnBnylexhfHQgplYp6iDG0xNd16IWKeFBhGF8pdW5f8UxGBiUJXew0sYXDXFFbiz6Ik2JoiX/kkZCWNqRddIHNBps2QUtLj0XDRcW0JFip7KFccdu/+vbtAx3dIXF/Tg4P5mR3mx8Wgl91OoENBEPP9mtroaFhyLtpx5gxUFQE27bFzzebobUVAO+TT/CR08XVv152yCZf2/QWmqaRnp0F4QHdonaLW/JGsi4j45BlHs/K5ChfC7OdrkHpc+iJ7/VCfT0UF0N+fmzeZ5+pm7fOSEiAQKD7fc9igRNPjE2LXPakpioCd4K84QYwmRD19fDHP8Zp0sKyq65i3969ZGZm4XQ28+Tf/tbbbzlg/LPtRrUnvJeS8jUifhvkpk0wcmRMmnj5ZZg/X5lazZqFOO44SE4GkwkZDivWvW0bYtMmNYEimDUL+a9/xXYQDiPiEL29r6efhh074Nvfjj8+KbGlppKZlY2jyIHT6UTTNIyvsfzQE75caV8I5GmnIebMAcNABgKQkIC0WhGtrYr406YhZ85U9/cvvtjOsvsKed55kJiIeOUV+PzzrvlScmD/fnbt3MnB6iqE0LBarXEvtvqMadOQixapSfzCC72q4igu5le/ubpLepIRZn8odusJp9jOK81I/15fhiSk/OWwEV/s2oXMzFQsG8DvR1osiLlzkT4f+P0wdiwcdVSHEfrrr6ttw+uF449HFhYqS52aGvD5wGoFTYNQCHq6TbTb1XYStZJNmzeToZuYXqREum2vvwFA1YEKACaNUjem5o0b0YTo9/FLrlmDuP125JQpiBdf7FU7FrOFnNzcuHlxpn9qZ+ebHscENw/fyj/1VMS55yKffFJ9XrkSkZuLzMqC6dNh40ZkbW0H4QMB9RcZrNMJWVmwbBnceisiORm5fbti4w8/jLj88kN2L37+8y5pSb/6FccAPVogvPhib79l/L6XLUP+5jfK2shk6hX3CodDcc3pLFKS0GkrMqzWAAkJPR9voscEq4ae+N3N8nnzMCoqEEceqYrl5SH27oVdu5DBIBhGVzcUrxdyc+GMMxT7/Jrsx/KWWxBPPIFculTJNM3NPdbZvWsXlyz6SZf0M5qauK6yKibNk5790ICvdAcdnRU8Wkd3cuZMxOTJ6oNhQOQSqaQEsW8fohuLW+l0wqxZSn/wNSG+OO888PkQP/lJt4Sf0wsJXgDH98G4ticMbxCGyGTw+xX7KywEQH70EaIqajZbLIrFd+M0IltbYflyyMj4ekyA+np49lkoLe22yHWVlfyoB+PXS2trB+2YB8Mt7QuhVviDDyKWLFEsMCUFUVur8hMSYM4cmDRJTQ4pobwcXn01VlE0ZgzyrLOUsHjllQMe1n6LhZ8Xju2S/lxJaZf9dagggKurqgkKwQGrNSbPYhjkB4L8rLYvVt49Y3iJb7WqVX3ZZR1bQHExFBQoaf2CC2J1AUKAwwEXXwwPPQSNjTB5Mpx+Omga8oUXlFLnwQcHNKyQENTE0RHs+Ne/MBITsW3bxoQ4AuNg44WMDF5OTyfedPtPCkxuaWHuIF6jDy/x20zBpdncIcxpGpxzjlLAdFICtSMpCX74Q3jsMaXZa5s4MjVVGZ2OGTMkw8297z5lzhZPCznIeCw7iz/n5tLdIVAC14/KIz8Y5IjB0D0wzMSXH3yA/OQTmDhR3fhFkJrasz/d2LFKDnjzTaW7t1gQBw6oLWPz5p47HzNG9Tl6NLz1FgA7770Xf34+sqIC/nx3lyoZzz9P0jCw/YCmcXc3Z/rO5V6227+exBcuF2LzZgy3G8aPb9/zgQ7lz6EwahR8+qm6E0hNVbLAG2/0qm+5eDHi00+Va1ob8YNZWQRzcjAN0o8JKO5mtysnkoICtVW1tio5ZtcucLkU5zr2WFUmIu98CRhetu/1IsNhRFMTcssWqKhAVFer1XjJJT3Xj5ogwmJB9oEdi9deU9wlyux8SGA2I//6V8QppyAffRTxox8hn3sO8e67yNtvV+kPP6zcyubNQ5x2mpognTC2sJCzFizokp4fCFLT6TsERo2eV3b0pD4ZUrbq+vLhJX5zs7oS/fjjWAVOY6OS7Hsy/IgSdqRhIJr64J5+8snwl78ooXIo0dgITU1wwglqVefmQlUV/P73iBtvVKt+7FjEBRfAqlXq99C6nrjT0tOZccKJXdsH4pz0HW1/vYY5HE4bXuKffz5cfnms1s/jgbVrobJScYDuEAyq1XLOOeoEIARy0SIAxJtvQpxVEoP6euTSpYiobWLEU08RSkujeRAVJ6BuEOVDDyGuuUZdWY8ZA4mJyJUrEdddp460Nhv88pfqFPPlsP6nh5f4Ho/64tGwWJQ0v2kTLFrU/erfvFnp+keObHcpj7Qlw+GeIxLde2+XMjnPPw+A32qF4qIuVcoeeQQSE0n64gscK1f21EMH/vlPdTp55RUIBBBr1yIffxyxfj20tiKuvFJNjm3b1CVVnO/8xfbtLL20a5STHzQ7WdxpsngKxj5e/8hDfRggjB8/vnx4id/SojRy27crASgYhHXrVHpZmbrFmzOn64/x2WcQibrxxBPw058qge+55+D443ulK+8PkrdsQTebsVb2ZOjVCT4f4vzzOz4/+yzi2Wc7Pr/zToeLOSrY3gSfn52JHQsjGAxSW1PTpelRlVWYO213Zo/fNX78+D67Sw0t8TtfgwoBfj9iwwZkcTE89VSsa/V77ynWPnkyZGYqTrF9u5KSI00EAnDLLchzz0W8+SbyUFtFL5EWDnN2Y1f5YfTdd2MZBitaTUru3buXpWPHsD3C1eLg7MYmzuiLnNMDhl+9m5SEvPrq7ve6qir1Fw+RuEF33om47z7ktm2Ql6eOfwNAZijEiu76HCbYwmHu3ruPq/PzqTd3kMUkJSmGwTi/n+XVg2e8CcN9sRMl1Yrf/15JunHMlOPCbFZ6gbvuUle7jY3Daxg6DHjbZmNrchJ7rNb2v5KEBD5OSuL1tDSqDmGm1h98Obd6AC4X4tZbEQ0N6nYuznEnUkekp6vz+Y03qlNBBN3V+RpiXUYGq0aPItyNwOvSdX5TkI9vEL/z8LP9CDRNndv/+Ee1x8+bB9nZCF1H6royyAyH1Zn52WcRmzd3vb79LyH+HquVW/K6udeIQklCAq/Y7ZwzSHGPhs96d//+mHO8bGhQ9mxnn43YskWZXdtsigukpCBaWhRrj3eLdeqpyGi17qWXIi++GNEbFXEU3K+/zieBAP+7+oZDlnvu8SdV5NEiR8/2A0Igb7tN3UU0NyMWL0beey/igQfgiCNg926YMwc5cSJoGmLJElrd7l6POTSIDlDDt/LjhWjrFPgRtxvc7p7P7PFWfA/aQXnnnYidO9VkarMjlGlptDpduNuUPNOmzyAhKRGBIG9UHi+98AItXi/SbkdqWu9czyZPhqQkZbUze7aSUwoLkTfeiNi4EQ4eRObnI1auhKOOgksvjetHMH7CBKZMn94lfZTHQ4MvVr3rG+c4vmTO7Jt7HpyCECIY8PlWD5/1bnU1MhIuLYL9PcYejA+ns6vnTA/33GLDBmUzUNRVmRPBiSedRG1NDVu3fMR3TjyBlv7E601IUEfUE05A3nAD4he/UIqd9euRS5YgoqOVud3IbgTecY4izjj7nLh5cbQaxwqI/1JKPEiJNTFxGFf+lCn9iwseDx9+eEgHjbg4+mjk1KmIjz7qtog93Y7X62Ha9Blk5+SSnJKCt6+q3w8+gCuuQF5wgTIvjxwh779fKafaIFevVhxi2aFdxYYMhjHEGj5NgwkTlMJmuJCYGJcLyIICSE9vv86Nh/+95pqB9x8KIRYtivEJFKefrv6dNk392/kaOs7q/2TrFu645ZYu6fObm/iOO3ZCtoyf8Jrrl794qLdDFIbR6nA4Xhr64Azf+tbwG1m6XEpn3hPagiD0NLp2CWOIvkeN2cw5xUX4e3F6uenAgS6Wvl/d4AxRqtmvHNqCIHzZB8bc1lbu3rePZWPG0HKICTC/qblXJt69xZf9vQ+jDcd6W/jTvv0kduIuCYZBTmsrp7pcg66CPhyW5SuEyV4vb3/e+fmcocPhlf8NxiFXvjFyJC1LluCbNYuQ3Y5hNmPyeLDs3Uvy3/6G5R//GK5x/tfD0E3SPeM7Ff5TT24OjR6NNJkwV1Zife/9ZNu/3yjQg4FB59JxpX1ps+F88EGapk3DkJJ0ux1d12lobIx5UCmxpYWsa6/F8lK/n3P9xsMwmY2GSy/d7fn55RlGUlIWUq5EiFFAu9uxCIedSU/9vSJrzc1FphavtXMbgxJ7FyBcVETVBx/QMHUqRhuh0+x2UlNT259XA/XChpadTeUdd+COo548jJ4RzMpuObBhw17XVVdOMJKSchBib1FR0eqA378MOk6gUteFd9FC9/633q7zFY8fNIO/GOIbmZlUrV+vbNqiUHPwILW1tbRG+ZXb09LIzckhzW6n9swz8fzhD4M1pm8EQmn2lsoNrzaECsd2BFaWclxpefmdCQkJTxBFGwEXFRUVHU962vuV/3jJ1FLoqI/XZl8RQ/z6l18mMTOz/fEEaFvhuo7ZYiEjIwNbSgqapuFve2UjEn699txzaT355MEY038/hKDysccqjIyMpxHi1pg8KWdLIbwSHgE+RHlqTSkrKysAioTFklGz7umWsMXS/UsYvUQ7Hw+cdRbunBzybTbMZjMutxspJTnZ2Zg76dEzwmHqGxqoiDKskFLSeNtt5La9z3cY3aNp3vf3hiceNcpRWLgcoLy8/AoJTQIucjgcMbrfkpKSyWjaI0C77tnIyCio/8UvP8+9/bb40aV6ifaV77rqKgBq6+qoq68nHA4zcsSILoQH0HWd3JwcEjsZG3rS0wkP8oPK8rXXOrx5NA15//3Il17qcPP6GsJ51a9bJSSXlZc/UVZe/oQEj4ATOhMeoLi4eKs0jJnAjuh070UXZskBGrO0PYin4c1TAn/k8YSM9PR21t8dIi9q6rqOPS0NXdfxXnbZgAbUBZMmtXvvyptvhnPPVXfhg+xoMVwIZmT6woWFEbfihcBCpPztod7WKy4udiFl5IetBJ6XSUmZnuOm9tGmPBYaQHjcOMJRRzhN02IeVOgOZrMZq9VKWmoqGRkZ2NPSCBYX91ivX1i8GJYtQyxYAJ98MjR9DAN8k46uQYhok6MWq9X6957qFRUVvQvskpp2SZHDcQ7wTGDa1AE5LCjitxFMCIEQAlPUU+k9wWw2421pwev14vF6CfcykmRfIL/7XeQ99yB+9jPoHHxxxgzkW28hq6qQb74JU6eq9DlzkOvXq4AQoO7zN2xQbt4AF12E/PRTZEUF8qmnYETbqyVCIP/wB5X+6acqEMQgIjQqLxJiLLLa9ubn5/fKTVjCdiHlwrKysu8CM1pHjx7QNaMGoNXVoQlBQX4++aNHxyhyeoJhGAQCAWpqawkEAmiD6e4cQUGBun7tfLGRl4d89VXEa68hTj4Z3nsP+eKLyv3rww/hpJPgtNMAVCg0t1vFx5k3D7l2LeL66xHz5qkIoPffr9qcNAl++1vEGWcgrr5aBY0YRIhAQAP2WS2WLKS8EOWw0ytoYEHKCyW8AYwVwf4FpIxqD/QvvoixTwuFwzFn+u4gpYx5aQvANAROh+KRR+Cll9QKHTu2I2PePEhJQRYUqNg8I0eqv2OOUS5c69YhFy5UdRYsUF6ygDznHGhqQs6dq8Kj6bpyE9M02LMHysqUG3V2tvIgGkToByoTAXdpaakLOACM27VrV48PEEspNQnTotNMB/YPSOVrAhBeL1aPh/1trlNSSpqdTrJ7eBTZ6XIhpUTX9fbnVJOee24g4+kW4uKLkf/5j/J1P/FEZSJlNoPHoyxjI3j88fbVKh54APnGG8iaGtiwoUNWMJmgtBQRieWTmNjhVuZyIY49FhYvRq5Zo3zoo/3uBojkj7eMqA+F0/ILCsqBTEDXTKZfAKsOVa90z56fCPX2biuKW8ikjRu7j8/eC7SL87Y33kBK2c7y3W43Tlf3hgM+n4+mpiZyc3MpyM/HarVilnLoHltyuZSw961vISPE3rhRmUB973tqMpx+uorwGbkTf/99Ff7ssssQq1e3NyU2bFCyQWEhBIPIZcuQq1apekcfjVyxAu65B3H77coRdBBhCgZMpo8/rgDygSQAASvKyspmd1enpKTkSKS8UxrG0UjpAHxaTe3+pD3lA3qyvJ34KcuXY4kyJEhOTsblclFTW4vf72+fFMFgkIbGRg7W1KjJ0lZHGgYZ0T/8YGHbto64up99hrj0UmUX+P3vq9W7cCHyoouQ27cr580LL1R7ewRbtsC//61kgAjWrUOsXo28917k1q3KWeSKK1ReUxPMno10OpFXXaV87AcZmdffkIWUEQ2dIWGTFOLpkrKyVSUlJe2ruaSkJLW0tHSp0LTNAuy6rntaW1tbgFD6zWtCA32KJeZWL7BgAZVr1mC1WskbOZJgaysVFRUdhdvkgs4CoRCC5IYGcqdP//KCIrZ5+cRgxAhkWRli7lx4993e1wO1NRziLeGBouqmNV/4/udHRwD3Fzkcl5eVlV0k4WEgDOxBylaEKCJWIPQAhnnrx9X5/7PgW6KNDoNyq2d95hlyH3mEUGsrPp+vi9lyRkYGY8eMIaGTtWmC10vO3LlfbjTMOASUV16p3L67I3w39YAhJTzAyN+tmGD6aMtuAcfs2bNnggGRGCw6UASsEFCEENHeqCla9cHGvIt+OkbELsB+sQANIWI29uQbbmDEihU0VFXR1CnoQUQPEOEAou1hxZFTpvQtPs4wQezbhxiECJ1DAWGERcHChcUJzz6fGgqHPxNwcUy+EGV+v/8gUkY8R6T1gw92FsyZk2fyeGJWn9S0fll1Cpc9+1Fbc92FnTOk1Yrn5ptxz56NPzm5ndVrmoZmGCSXl5N2/fWYoyJMHEb/4J14dHXDqpXNoYlHFUhdT25LbgZcSJmrl5Xvt990s8W+aWOXaJMhs9XlzMyZnXXwwIed83qCqB89flSiq+4fSa6myd0VklYr4QkTkDk56Nu2ofXGJv4w+oxQYlJry5RpVaG8PL+RaJWm/RUJyR9vyTE3NcbVtYdN5hZ3Wsbt6Q011/WnPwFQm31kijVcf6M56J8lDCMb5GHDzq8yhOYP6/ru1sSUtek1B/ptSPn/KBi6amO+dU8AAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/turtle_matrix.png":
/*!*************************************!*\
  !*** ./src/media/turtle_matrix.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/turtle_runing.png":
/*!*************************************!*\
  !*** ./src/media/turtle_runing.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/turtle_runing_0f9108b9.png";

/***/ }),

/***/ "./src/media/turtle_servo.png":
/*!************************************!*\
  !*** ./src/media/turtle_servo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/turtle_servo_7d54f34c.png";

/***/ }),

/***/ "./src/media/turtle_sr01.png":
/*!***********************************!*\
  !*** ./src/media/turtle_sr01.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/turtle_track.png":
/*!************************************!*\
  !*** ./src/media/turtle_track.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "blockly/core":
/*!**************************!*\
  !*** external "Blockly" ***!
  \**************************/
/***/ ((module) => {

module.exports = Blockly;

/***/ }),

/***/ "profile":
/*!**************************!*\
  !*** external "profile" ***!
  \**************************/
/***/ ((module) => {

module.exports = profile;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/zh-hans */ "./src/language/zh-hans.js");
/* harmony import */ var _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/zh-hant */ "./src/language/zh-hant.js");
/* harmony import */ var _language_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/en */ "./src/language/en.js");
/* harmony import */ var _generators_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators/generator */ "./src/generators/generator.js");
/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/block */ "./src/blocks/block.js");







// 载入语言文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHans, _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__.ZhHansMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHant, _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__.ZhHantMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.En, _language_en__WEBPACK_IMPORTED_MODULE_3__.EnMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHans.MSG, _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__.ZhHansCatgories);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHant.MSG, _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__.ZhHantCatgories);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.En.MSG, _language_en__WEBPACK_IMPORTED_MODULE_3__.EnCatgories);

// 载入图形化模块外观定义文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Blocks, _blocks_block__WEBPACK_IMPORTED_MODULE_5__);

// 载入图形化模块代码生成定义文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Arduino.forBlock, _generators_generator__WEBPACK_IMPORTED_MODULE_4__);
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map