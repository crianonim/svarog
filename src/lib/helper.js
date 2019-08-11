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
export const defaultValues = {
  circle: '{"cx":50,"cy":30,"r":10}',
  rect: '{"x":20,"y":50,"width":40,"height":20}',
  polygon: '{"points":"10 10 45 15 20 35"}'
};
