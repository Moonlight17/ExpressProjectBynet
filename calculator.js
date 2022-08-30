exports.add = (num1, num2) => {
	res = parseInt(num1) + parseInt(num2)
	return '' + res;
}

exports.sub = (num1, num2) => {
	res = num1 - num2
        return '' + res;
}

exports.multi = (num1, num2) => {
	res = num1 * num2
        return '' + res;
}

exports.div = (num1, num2) => {
        res = num1 / num2
        return '' + res;
}

