export const start = [
  {
    shape: "circle",
    attributes: { cx: 151, cy: 132, r: 52, fill: "red" }
  },
  {
    shape: "circle",
    attributes: {
      cx: 101,
      cy: 120,
      r: 40,
      fill: "pink"
    }
  },
  {
    shape: "circle",
    attributes: {
      cx: 601,
      cy: 420,
      r: 140,
      fill: "green"
    }
  },
  {
    shape: "rect",
    attributes: {
      x: 40,
      y: 320,
      width: 140,
      height: 200
    }
  }
].map( (el,id)=>({...el,id }) );

export const colours = ["brown","black","red","blue","green","yellow","pink","purple",'teal','orange','wheat','coral','crimson']

export const defaultValues = {
  circle: { cx:50,cy:30,r:10},
  rect: {x:20,y:50,width:40,height:20},
  polygon: {points:"10 10 45 15 20 35"},
  path: {d:"M 10 10 C 200 200, 400 20, 50 10"}
};

export const probably = (fraction) => Math.random() < fraction;
export const rnd = (max) => (Math.random()*max)>>0;


export const createRandomShape=()=>{
  const shapes=Object.keys(defaultValues);
  // const type=shapes[rnd(shapes.length)]
  const type=shapes[rnd(2)]
  const shape={shape:type};
  if (type==='circle'||type==='rect'){
    shape.attributes=Object.fromEntries( Object.entries( defaultValues[type]).map(entry=>{
      entry[1]=rnd( (entry[0]==="r"||entry[0]==="width"||entry[0]==="height")?540:720);
      return entry
    }) );
    
  }
  if (probably(0.5)){
    shape.attributes.strokeWidth=rnd(10)+1;
  }
  if (probably(0.7)){
    shape.attributes.fill=colours[rnd(colours.length)];
  }
  if (probably(0.4)){
    shape.attributes.stroke=colours[rnd(colours.length)];
  }
  console.log(type,shape)
  return shape;

}

export const createRandomSVG = ()=>{
  const shapes =[];
  const attributes = {viewBox:"0 0 720 720"}
  const svg = {attributes,shapes}
  const count = rnd(6)+3;
  for (let i=0;i<count;i++){
    shapes.push({...createRandomShape(),id:Date.now()+""+i});
  }
  console.log(count);
  return svg
}
