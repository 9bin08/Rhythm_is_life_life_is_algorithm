function solution(sizes) {
  let rectangle = [0,0]

  sizes.forEach(el=>{
      let [width, height] = el.sort((a,b)=> b - a)
      if(width > rectangle[0]) rectangle[0] = width
      if(height > rectangle[1]) rectangle[1] = height
  })
  return rectangle[0]*rectangle[1]
}