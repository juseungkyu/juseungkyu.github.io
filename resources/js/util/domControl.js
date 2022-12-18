// 이미지 불러오기
async function getImage(url){
    const img = document.createElement('img')
    img.src = url

    return new Promise((res, rej)=>{
        img.onload = ()=>{
            res(img)
        }
        img.onerror = ()=>{
            res(false)
        }
    })
}

// 이미지를 도트로 변환 (안티 엘리어싱 회피)
async function getDotImage(url, scale = 3) {
	const img = await getImage(url)
	
	if(!img){
		return false
	}
	const srcCanvas = document.createElement('canvas')
	const srcCtx = srcCanvas.getContext('2d')
	srcCanvas.width = img.width
	srcCanvas.height = img.height
	srcCtx.drawImage(img, 0, 0)
	
	const resultCanvas = document.createElement('canvas')
	const resultCtx = resultCanvas.getContext('2d')
	resultCanvas.width = img.width * scale
	resultCanvas.height = img.height * scale	
	
	const dotData = srcCtx.getImageData(0, 0, img.width, img.height).data;
	
    let offset = 0;
    for (let y = 0; y < srcCanvas.height; ++y) {
        for (let x = 0; x < srcCanvas.width; ++x) {
        	let r = dotData[offset++]
        	let g = dotData[offset++]
        	let b = dotData[offset++]
        	let a = dotData[offset++] / 100.0
        	resultCtx.fillStyle = 'rgba(' + [r, g, b, a].join(',') + ')'
        	resultCtx.fillRect(x * scale, y * scale, scale, scale)
        }
    } 
    
    return resultCanvas
}

// 불러온 이미지 저장
function imageSetting(imageUrls){
	const length = imageUrls.length
	let count = 0

	return new Promise((res, rej)=> {
		imageUrls.forEach(async url => {
			const urls = url.split('/')
			const name = urls[urls.length-1].split('.')[0]
			
			window.imageObject[name] = await getDotImage(url)

			if(length <= ++count) {
				res()
			}
		})
	})
}