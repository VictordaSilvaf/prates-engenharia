export const importAll = (r: any) => {
 let images = [{}];
  r.keys().forEach((item: any, index: any) => { 
    images[item.replace('./', '')] = r(item); 
  });

 return images
}