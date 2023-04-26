const loginFormCloseBtn =
  "data:image/png;base64,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UmVhZHlxyWU8AAAECmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRTMyRUYyREM2OTExRURBOTE0QTAyNDQ3QzU5RTQ3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRTMyRUYxREM2OTExRURBOTE0QTAyNDQ3QzU5RTQ3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIDI3LjIgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2RkMGQ4NTgtMjJiYS02NjQzLTgzMDYtYjM1NTVhODVjYWY5IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MTQ0NWQ1OTItYTgzNi05ZDQxLWExYzAtZjZjMjMxZDcxZTFlIi8+IDxkYzp0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";
module.exports = loginFormCloseBtn;
