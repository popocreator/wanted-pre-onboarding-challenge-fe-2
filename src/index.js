/**
 * @constructor
 * @param {string} id - 아이디
 * @param {string} content - 내용
 * @param {boolean} done - 완료여부
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function Todo(id, content, done, category, tags) {}

/**
 * @param {Object} todo - 할 일
 * @param {string} todo.id - 아이디
 * @param {string} todo.content - 내용
 * @param {boolean} todo.done - 완료여부
 * @param {string} todo.category - 카테고리
 * @param {string[]} [todo.tags] - 태그들
 */
Todo.prototype.create = function ({id, content, done, category, tags}) {};

/**
 * @param {Object} todo - 할 일
 * @param {string} todo.id - 아이디
 * @param {string} todo.content - 내용
 * @param {boolean} todo.done - 완료여부
 * @param {string} todo.category - 카테고리
 * @param {string[]} [todo.tags] - 태그들
 */
Todo.prototype.read = function ({id, content, done, category, tags}) {};

/**
 * @param {Object} todo - 할 일
 * @param {string} todo.id - 아이디
 * @param {string} todo.content - 내용
 * @param {boolean} todo.done - 완료여부
 * @param {string} todo.category - 카테고리
 * @param {string[]} [todo.tags] - 태그들
 */
Todo.prototype.update = function ({id, content, done, category, tags}) {};

/**
 * @param {Object} todo - 할 일
 * @param {string} todo.id - 아이디
 * @param {string} todo.content - 내용
 * @param {boolean} todo.done - 완료여부
 * @param {string} todo.category - 카테고리
 * @param {string[]} [todo.tags] - 태그들
 */
Todo.prototype.delete = function ({id, content, done, category, tags}) {};
