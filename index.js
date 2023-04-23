// b. format.js 格式化文件
const Validate = {
    /**
     * 手机号校验
     */
    isPhone: (value) => /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value),


    // 身份证号合法性验证
    // 支持15位和18位身份证号
    // 支持地址编码、出生日期、校验位验证
    idIdCard: (value) => {
        // 正则
        const idReg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])(\d{3}|\d{2})(\d|[xX])?$/i
        let result = true
        const code = value.split('')
        // 320524 1968 0112 339 X
        // ∑(ai×Wi)(mod 11)//加权因子
        const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        // 校验位
        const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
        let sum = 0
        let ai = 0
        let wi = 0
        for (let i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
        }

        if (code[17] === 'x') code[17] = code[17].toUpperCase()
        console.log(parity[sum % 11], code[17]);
        if (parity[sum % 11] != code[17]) {
            result = false
        }
        return idReg.test(value) && result
    },
    /*
       * 邮箱校验
       */
    isEmail: (value) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value),

    //判断是移动平台
    IsIA: () => {
        if (/android/gi.test(navigator.appVersion)) {
            return 1 //安卓
        } else if (
            navigator.userAgent.indexOf('iPhone') != -1 ||
            navigator.userAgent.indexOf('iPod') != -1 ||
            navigator.userAgent.indexOf('iPad') != -1
        ) {
            return 2 // 苹果
        }
    }
};

export default Validate;