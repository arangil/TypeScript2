var Physician = (function () {
    function Physician() {
        this.yearsofexperience = 0;
        this.logText = function (errMsg) { return ''; };
    }
    Physician.prototype.Mentors = function (student) {
        console.log(this.name + ' mentors ' + student);
    };
    return Physician;
})();
exports.Physician = Physician;
//# sourceMappingURL=Physician.js.map