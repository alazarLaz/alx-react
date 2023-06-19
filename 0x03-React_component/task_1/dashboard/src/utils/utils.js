
function getFullYear() {
    return new Date().getFullYear();
}
function getFooterCopy(isIndex) {
    if(isIndex) return 'Holberton School'
    return 'Holberton School main dashboard'
}

function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}



module.exports = {getFullYear, getFooterCopy, getLatestNotification}