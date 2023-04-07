// var Pfont = document.getElementsByName('Font')
// var Palign = document.getElementsByName('Align')
// var Pheight = document.getElementsByName('Height')
// var Plspace = document.getElementsByName('Lspace')
// var Pindent = document.getElementsByName('Indent')
// var Ptrans = document.getElementsByName('Transform')
// var Pdecor = document.getElementsByName('Decorate')
// var PbordCol = document.getElementsByName('BorderColor')

var Pelem = document.getElementById('PAR')
var PlocStyle = 0
var styleSheet = document.styleSheets[0].cssRules
for (var i = 0; i < styleSheet.length; i++) {
    if (styleSheet[i].selectorText == '#PAR') {
        PlocStyle = i
    }
}


function ChangeFont(val) {
    styleSheet[PlocStyle].style.fontFamily = val
}

function ChangeAlign(val) {
    styleSheet[PlocStyle].style.textAlign = val
}

function ChangeHeight(val) {
    Pelem.style.lineHeight = val
}

function ChangeLSpace(val) {
    Pelem.style.letterSpacing = val
}

function ChangeIndent(val) {
    Pelem.style.textIndent = val
}

function ChangeTransform(val) {
    Pelem.style.textTransform = val
}

function ChangeDecorate(val) {
    Pelem.style.textDecoration = val
}

function ChangeBorder(val) {
    styleSheet[PlocStyle].style.border = val
}

function ChangeBorderColor(val) {
    Pelem.style.borderColor = val
}