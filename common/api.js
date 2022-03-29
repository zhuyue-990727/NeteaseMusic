import {
	baseUrl
} from "./config.js"

export function topList() {

	let listIds = ['19723756', '3779629', '2884035', '3778678'];

	return new Promise(function(resolve, reject) {
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = [];
				result = res.data.list;
				result.length = 4;
				//传参
				for (var i = 0; i < listIds.length; i++) {
					result[i].listId = listIds[i];
				}
				resolve(result);
				//console.log(res);
			},
			fail: () => {

			},
			complete: () => {

			}
		})
	})
}
//获取榜单列表接口
export function musiclist(listId){
	 return uni.request({
	 	url:`${baseUrl}/playlist/detail/?id=${listId}`,
	 	method:'GET'
	 })
}

//获取歌曲详细信息接口
/*/song/detail?ids=347230,/song/detail?ids=347230,347231*/
export function songDetail(songId){
	 return uni.request({
	 	url:`${baseUrl}/song/detail/?ids=${songId}`,
	 	method:'GET'
	 })
}

//获取相似歌曲信息接口
/*/simi/song?id=347230 */
export function songSimi(songId){
	 return uni.request({
	 	url:`${baseUrl}/simi/song/?id=${songId}`,
	 	method:'GET'
	 })
}

//获取歌曲评论接口
/*/comment/music?id=186016&limit=1*/
export function songComment(songId){
	 return uni.request({
	 	url:`${baseUrl}/comment/music/?id=${songId}`,
	 	method:'GET'
	 })
}

//获取歌曲歌词接口
// /lyric?id=33894312
export function songLyric(songId){
	 return uni.request({
	 	url:`${baseUrl}/lyric/?id=${songId}`,
	 	method:'GET'
	 })
}

//获取音乐 url
// /song/url?id=33894312 /song/url?id=405998841,33894312
export function songUrl(songId){
	 return uni.request({
	 	url:`${baseUrl}/song/url?id=${songId}`,
	 	method:'GET'
	 })
}

//搜索
// /search/hot/detail
export function searchHot(){
	 return uni.request({
	 	url:`${baseUrl}/search/hot/detail`,
	 	method:'GET'
	 })
}

// /search?keywords=海阔天空
export function searchWord(word){
	 return uni.request({
	 	url:`${baseUrl}/search?keywords=${word}`,
	 	method:'GET'
	 })
}

// /search/suggest?keywords=海阔天空
export function searchSuggest(word){
	 return uni.request({
	 	url:`${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
	 	method:'GET'
	 })
}