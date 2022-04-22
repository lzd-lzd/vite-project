import allData from "./allData";

var utils = {
    /**
     * 数据字典查找
     * @param key value值
     * @param typeKey type
     * @param allData 所有的数据
     */
    findAllDataDict: (key, typeKey) => {
        return allData[typeKey][key];
    }
};
export default utils;