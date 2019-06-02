// * 创建列表实例var list = new List()

// *
// 实例属性 *
// this.dataStore 初始化空数组 *
// this.listSize 列表的元素个数 *
// this.pos 列表的当前位置指针 *
// 实例方法 *
// .append(ele) 为列表添加一个项 *
// .remove(ele_ind) 移除一个列表项（ 元素名或者序号） *
// .find(ele_ind) 查询列表项（ 元素名或者序号） *
// .length() 返回当前列表的长度 *
// .toShow() 显示列表中的全部元素 *
// .insert(ele, ele_ind) 向列表中插入一个元素（ 插入的元素， 要插入到的ele元素的后面或者是index） *
// .clear() 清空列表中的数据 *
// .contains() 判断给定的元素是否存在于列表中

// .front() 列表的指针指向开头 *
// .end() 列表的指针指向末尾 *
// .prev() 列表的指针指向前移动一位 *
// .next() 列表的指针指向后移动一位 *
// .currPos() 查看当前指针的位置 *
// .moveTo(pos) 移动指针到某位置 *
// .getElement() 返回当前指针所指的元素 *
// .hasPrev() 返回当前指针是否还有前一项 *
// .hasNext() 返回当前指针是否还有后一项
//创建列表构造函数
const List = function() {
  this.dataStore = []; //初始化空数组
  this.listSize = 0; //列表的元素个数
  this.pos = 0; //列表的当前位置
};
/*
 *append()为列表添加一个项
 *param{Strung} 添加的元素
 */
List.prototype.append = function (ele) {
  this.dataStore[this.listSize++] = ele;
};
/*
 *remove()移除一个元素
 *param{Numbe/String} 要移除的元素
 */
List.prototype.remove = function (ele_ind) {
  var find = this.find(ele_ind);
  if (find === -1) {
    return false
  }
  if (isNaN(find)) {
    this.remove(find)
  } else {
    this.dataStore.splice(find, 1);
    this.listSize--;
    return true
  }
};
/*
 *find()查询列表项
 *param{Number/String} 传入数字或者字符，返回当前数字所对应的列表项或当前列表项对应的index序列
 */
List.prototype.find = function (ele_ind) {
  var _ele_ind = parseInt(ele_ind)
  if (isNaN(_ele_ind)) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == ele_ind) {
        return i
      }
    }
    return -1
  } else {
    if (_ele_ind >= this.dataStore.length) {
      return -1
    } else {
      return this.dataStore[_ele_ind]
    }
  }
};
//返回当前列表的长度
List.prototype.length = function () {
  return this.listSize
};
//显示列表中的全部元素
List.prototype.toShow = function () {
  return this.dataStore
};
/*
 *向列表中插入一个元素
 *param{String} 要插入的元素
 *param{Number/String} 要插入到的ele元素的后面或者是index第几位
 */
List.prototype.insert = function (ele, ele_ind) {
  var _find = this.find(ele_ind);
  if (_find == -1) {
    return false
  };
  if (isNaN(_find)) {
    this.dataStore.splice(ele_ind, 0, ele);
  } else {
    _find = this._find(ele_ind)
    this.dataStore.splice(_find + 1, 0, ele);
  }
  this.listSize++;
  return true
};
//clear()清空列表中的数据
List.prototype.clear = function () {
  this.dataStore = [];
  this.listSize = 0;
  this.pos = 0;
};
/*
 *contains()判断给定的元素是否存在于列表中
 *param{String} 给定的值
 */
List.prototype.contains = function (ele) {
  var _find = this._find(ele);
  if (_find == -1) {
    return false
  }
  return true
};
//列表的指针指向开头
List.prototype.front = function () {
  this.pos = 0;
};
//列表的指针指向末尾
List.prototype.end = function () {
  this.pos = this.dataStore.length - 1;
};
//列表的指针指向前移动一位
List.prototype.prev = function () {
  --this.pos;
};
//列表的指针指向后移动一位
List.prototype.next = function () {
  if (this.pos < this.dataStore.length) {
    ++this.pos;
  }
};
//查看当前指针的位置
List.prototype.currPos = function () {
  return this.pos;
};
/*
 *移动指针到某位置
 *param{Number} 要移动到的位置
 */
List.prototype.moveTo = function (pos) {
  if (pos >= 0 && pos <= this.dataStore.length) {
    this.pos = pos;
  }
};
//返回当前指针所指的元素
List.prototype.getElement = function () {
  return this.dataStore[this.pos]
}
//返回当前指针是否还有前一项
List.prototype.hasPrev = function () {
  return this.pos >= 0
}
//返回当前指针是否还有后一项
List.prototype.hasNext = function () {
  return this.pos < this.listSize;
}
/*
 *私有方法,传入一个列表元素，返回当前元素对应的index
 *param{String} 列表元素
 */
List.prototype._find = function (ele) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == ele) {
      return i;
    }
  }
  return -1;
};

export default List