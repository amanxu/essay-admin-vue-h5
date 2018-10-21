import request from '../utils/request'

export function fetchPage(query) {
  return request({
    url: '/article/list',
    method: 'post',
    data: query
  })
}

export function detail(id) {
  return request({
    url: '/article/detail',
    method: 'post',
    data: {id: id}
  })
}

export function create(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data: data
  })
}

export function modify(data) {
  return request({
    url: '/article/modify',
    method: 'post',
    data: data
  })
}

export function deleted(id) {
  return request({
    url: '/article/delete',
    method: 'post',
    data: {id: id}
  })
}

export function operate(data) {
  return request({
    url: '/article/operate',
    method: 'post',
    data: data
  })
}

export function userByName(name) {
  return request({
    url: '/user/listByName',
    method: 'get',
    params: {realName: name}
  })
}

