import utils from "../../views/baogang/util.js"
let state = {
    selectId: "feeiyOFU",
    brushMouseId: "",
    brushSelection: new Map(),
    isSwitch: true,
    labelColor: [ "#c65b24", "#94a7b7"], //bad good
    startDate: new Date('2018-11-04 00:00:00'),
    endDate: new Date('2018-11-06 04:00:00'),
    brushSelectColor: "#c6cacc",
}

let getters = {
    selectId: state => state.selectId,
    brushMouseId: state => state.brushMouseId,
    brushSelection: state => state.brushSelection,
    isSwitch: state => state.isSwitch,
    trainGroupStyle: state => {
        return state.isSwitch ? (d => +d.label === 0 ? utils.labelColor[0] : utils.labelColor[1]) : (d => utils.categoryColor(d.productcategory))
    },
    labelColor : state => state.labelColor,
    startDate: state => state.startDate,
    endDate: state => state.endDate,
    brushSelectColor: state => state.brushSelectColor
}

let actions = {
}

let mutations = {
    selectUpid(state, upid){
        state.selectId = upid
    },
    brushMouseUpid(state, upid){
        state.brushMouseId = upid
    },
    changeLabelColor(state){
        state.isSwitch = ! state.isSwitch
    },
    setStartDate(state, Date){
        state.startDate = Date
    },
    setEndDate(state, Date){
        state.endDate = Date
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}