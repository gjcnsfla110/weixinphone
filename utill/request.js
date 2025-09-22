// api/request.ts
  const { platform } = uni.getSystemInfoSync();
  let BASE_URL = "/api/"
	if (platform === "devtools") {
	  // 위쳇 미니 프로그램 환경
		BASE_URL = 'http://localhost/'
	} else if (platform === 'h5') {
	  // H5 환경
		console.log("이부분들어옴")
		BASE_URL = '/api/' 
	} else {
		
	}
// 공용 request 함수
function request(options){

  return new Promise((resolve, reject) => {
    // 로딩 표시 (옵션에 따라 끄고 켤 수도 있음)
    uni.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
	  header: {
	          'Content-Type': 'application/json;charset=UTF-8',
	          ...options.header
	  },
      success: (res) => {
        // HTTP 상태 검증
        if (res.statusCode !== 200) {
		  uni.showToast({ title: '서버 오류', icon: 'none' })
          reject(res.data);
        }
		let responesData = res.data.data;
		resolve(responesData);
      },
      fail: (err) => {
        uni.showToast({ title: '네트워크 오류', icon: 'none' })
        reject(err)
      },
      complete: () => {
		  
      }
    })
  })
}

export function serviceGet(url,data,header){
	 return request({url:url,method:'GET',data:data,header:header});
}

export function servicePost(url,data,header){
	return request({url:url,method:'POST',data:data,header:header});
}