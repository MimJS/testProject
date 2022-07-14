module.exports = async({mail, days, id}) => {
    if(!mail || !days || !id) {
        return false
    }
    return true
}