function locomotive(){
    gasp.registerPlugin(scrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    locoScroll.on("scroll",scrollTrigger.update);

    scrollTrigger.scrollerProxy("#main",{
      scrollTop(value){
        return arguments.length
        ? locoScroll.scrollTo(value,0,0)
        : locoScroll.scroll.instance.scroll.y;
      },

      getBoundingClientRect(){
         return{
          top:0,
          left:0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").computedStyleMap.transform
      ? "transform"
      : "fixed",
    });

     scrollTrigger.addEventListener("refresh",() => locoScroll.update());
     scrollTrigger.refresh();
}

locomotive();

const canvas = document.querySelector("Canvas");
const contex = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = this.window.innerHeight;
    render();
});

function files(index){
var data = `
d:\WEB DEVLOPMENT\canvas\male0001.png d:\WEB DEVLOPMENT\canvas\male0002.png d:\WEB DEVLOPMENT\canvas\male0003.png d:\WEB DEVLOPMENT\canvas\male0004.png d:\WEB DEVLOPMENT\canvas\male0005.png d:\WEB DEVLOPMENT\canvas\male0006.png d:\WEB DEVLOPMENT\canvas\male0007.png d:\WEB DEVLOPMENT\canvas\male0008.png d:\WEB DEVLOPMENT\canvas\male0009.png d:\WEB DEVLOPMENT\canvas\male0010.png d:\WEB DEVLOPMENT\canvas\male0011.png d:\WEB DEVLOPMENT\canvas\male0012.png d:\WEB DEVLOPMENT\canvas\male0013.png d:\WEB DEVLOPMENT\canvas\male0014.png d:\WEB DEVLOPMENT\canvas\male0015.png d:\WEB DEVLOPMENT\canvas\male0016.png d:\WEB DEVLOPMENT\canvas\male0017.png d:\WEB DEVLOPMENT\canvas\male0018.png d:\WEB DEVLOPMENT\canvas\male0019.png d:\WEB DEVLOPMENT\canvas\male0020.png d:\WEB DEVLOPMENT\canvas\male0021.png d:\WEB DEVLOPMENT\canvas\male0022.png d:\WEB DEVLOPMENT\canvas\male0023.png d:\WEB DEVLOPMENT\canvas\male0024.png d:\WEB DEVLOPMENT\canvas\male0025.png d:\WEB DEVLOPMENT\canvas\male0026.png d:\WEB DEVLOPMENT\canvas\male0027.png d:\WEB DEVLOPMENT\canvas\male0028.png d:\WEB DEVLOPMENT\canvas\male0029.png d:\WEB DEVLOPMENT\canvas\male0030.png d:\WEB DEVLOPMENT\canvas\male0031.png d:\WEB DEVLOPMENT\canvas\male0032.png d:\WEB DEVLOPMENT\canvas\male0033.png d:\WEB DEVLOPMENT\canvas\male0034.png d:\WEB DEVLOPMENT\canvas\male0035.png d:\WEB DEVLOPMENT\canvas\male0036.png d:\WEB DEVLOPMENT\canvas\male0037.png d:\WEB DEVLOPMENT\canvas\male0038.png d:\WEB DEVLOPMENT\canvas\male0039.png d:\WEB DEVLOPMENT\canvas\male0040.png d:\WEB DEVLOPMENT\canvas\male0041.png d:\WEB DEVLOPMENT\canvas\male0042.png d:\WEB DEVLOPMENT\canvas\male0043.png d:\WEB DEVLOPMENT\canvas\male0044.png d:\WEB DEVLOPMENT\canvas\male0045.png d:\WEB DEVLOPMENT\canvas\male0046.png d:\WEB DEVLOPMENT\canvas\male0047.png d:\WEB DEVLOPMENT\canvas\male0048.png d:\WEB DEVLOPMENT\canvas\male0049.png d:\WEB DEVLOPMENT\canvas\male0050.png d:\WEB DEVLOPMENT\canvas\male0051.png d:\WEB DEVLOPMENT\canvas\male0052.png d:\WEB DEVLOPMENT\canvas\male0053.png d:\WEB DEVLOPMENT\canvas\male0054.png d:\WEB DEVLOPMENT\canvas\male0055.png d:\WEB DEVLOPMENT\canvas\male0056.png d:\WEB DEVLOPMENT\canvas\male0057.png d:\WEB DEVLOPMENT\canvas\male0058.png d:\WEB DEVLOPMENT\canvas\male0059.png d:\WEB DEVLOPMENT\canvas\male0060.png d:\WEB DEVLOPMENT\canvas\male0061.png d:\WEB DEVLOPMENT\canvas\male0062.png d:\WEB DEVLOPMENT\canvas\male0063.png d:\WEB DEVLOPMENT\canvas\male0064.png d:\WEB DEVLOPMENT\canvas\male0065.png d:\WEB DEVLOPMENT\canvas\male0066.png d:\WEB DEVLOPMENT\canvas\male0067.png d:\WEB DEVLOPMENT\canvas\male0068.png d:\WEB DEVLOPMENT\canvas\male0069.png d:\WEB DEVLOPMENT\canvas\male0070.png d:\WEB DEVLOPMENT\canvas\male0071.png d:\WEB DEVLOPMENT\canvas\male0072.png d:\WEB DEVLOPMENT\canvas\male0073.png d:\WEB DEVLOPMENT\canvas\male0074.png d:\WEB DEVLOPMENT\canvas\male0075.png d:\WEB DEVLOPMENT\canvas\male0076.png d:\WEB DEVLOPMENT\canvas\male0077.png d:\WEB DEVLOPMENT\canvas\male0078.png d:\WEB DEVLOPMENT\canvas\male0079.png d:\WEB DEVLOPMENT\canvas\male0080.png d:\WEB DEVLOPMENT\canvas\male0081.png d:\WEB DEVLOPMENT\canvas\male0082.png d:\WEB DEVLOPMENT\canvas\male0083.png d:\WEB DEVLOPMENT\canvas\male0084.png d:\WEB DEVLOPMENT\canvas\male0085.png d:\WEB DEVLOPMENT\canvas\male0086.png d:\WEB DEVLOPMENT\canvas\male0087.png d:\WEB DEVLOPMENT\canvas\male0088.png d:\WEB DEVLOPMENT\canvas\male0089.png d:\WEB DEVLOPMENT\canvas\male0090.png d:\WEB DEVLOPMENT\canvas\male0091.png d:\WEB DEVLOPMENT\canvas\male0092.png d:\WEB DEVLOPMENT\canvas\male0093.png d:\WEB DEVLOPMENT\canvas\male0094.png d:\WEB DEVLOPMENT\canvas\male0095.png d:\WEB DEVLOPMENT\canvas\male0096.png d:\WEB DEVLOPMENT\canvas\male0097.png d:\WEB DEVLOPMENT\canvas\male0098.png d:\WEB DEVLOPMENT\canvas\male0099.png d:\WEB DEVLOPMENT\canvas\male0100.png d:\WEB DEVLOPMENT\canvas\male0101.png d:\WEB DEVLOPMENT\canvas\male0102.png d:\WEB DEVLOPMENT\canvas\male0103.png d:\WEB DEVLOPMENT\canvas\male0104.png d:\WEB DEVLOPMENT\canvas\male0105.png d:\WEB DEVLOPMENT\canvas\male0106.png d:\WEB DEVLOPMENT\canvas\male0107.png d:\WEB DEVLOPMENT\canvas\male0108.png d:\WEB DEVLOPMENT\canvas\male0109.png d:\WEB DEVLOPMENT\canvas\male0110.png d:\WEB DEVLOPMENT\canvas\male0111.png d:\WEB DEVLOPMENT\canvas\male0112.png d:\WEB DEVLOPMENT\canvas\male0113.png d:\WEB DEVLOPMENT\canvas\male0114.png d:\WEB DEVLOPMENT\canvas\male0115.png d:\WEB DEVLOPMENT\canvas\male0116.png d:\WEB DEVLOPMENT\canvas\male0117.png d:\WEB DEVLOPMENT\canvas\male0118.png d:\WEB DEVLOPMENT\canvas\male0119.png d:\WEB DEVLOPMENT\canvas\male0120.png d:\WEB DEVLOPMENT\canvas\male0121.png d:\WEB DEVLOPMENT\canvas\male0122.png d:\WEB DEVLOPMENT\canvas\male0123.png d:\WEB DEVLOPMENT\canvas\male0124.png d:\WEB DEVLOPMENT\canvas\male0125.png d:\WEB DEVLOPMENT\canvas\male0126.png d:\WEB DEVLOPMENT\canvas\male0127.png d:\WEB DEVLOPMENT\canvas\male0128.png d:\WEB DEVLOPMENT\canvas\male0129.png d:\WEB DEVLOPMENT\canvas\male0130.png d:\WEB DEVLOPMENT\canvas\male0131.png d:\WEB DEVLOPMENT\canvas\male0132.png d:\WEB DEVLOPMENT\canvas\male0133.png d:\WEB DEVLOPMENT\canvas\male0134.png d:\WEB DEVLOPMENT\canvas\male0135.png d:\WEB DEVLOPMENT\canvas\male0136.png d:\WEB DEVLOPMENT\canvas\male0137.png d:\WEB DEVLOPMENT\canvas\male0138.png d:\WEB DEVLOPMENT\canvas\male0139.png d:\WEB DEVLOPMENT\canvas\male0140.png d:\WEB DEVLOPMENT\canvas\male0141.png d:\WEB DEVLOPMENT\canvas\male0142.png d:\WEB DEVLOPMENT\canvas\male0143.png d:\WEB DEVLOPMENT\canvas\male0144.png d:\WEB DEVLOPMENT\canvas\male0145.png d:\WEB DEVLOPMENT\canvas\male0146.png d:\WEB DEVLOPMENT\canvas\male0147.png d:\WEB DEVLOPMENT\canvas\male0148.png d:\WEB DEVLOPMENT\canvas\male0149.png d:\WEB DEVLOPMENT\canvas\male0150.png d:\WEB DEVLOPMENT\canvas\male0151.png d:\WEB DEVLOPMENT\canvas\male0152.png d:\WEB DEVLOPMENT\canvas\male0153.png d:\WEB DEVLOPMENT\canvas\male0154.png d:\WEB DEVLOPMENT\canvas\male0155.png d:\WEB DEVLOPMENT\canvas\male0156.png d:\WEB DEVLOPMENT\canvas\male0157.png d:\WEB DEVLOPMENT\canvas\male0158.png d:\WEB DEVLOPMENT\canvas\male0159.png d:\WEB DEVLOPMENT\canvas\male0160.png d:\WEB DEVLOPMENT\canvas\male0161.png d:\WEB DEVLOPMENT\canvas\male0162.png d:\WEB DEVLOPMENT\canvas\male0163.png d:\WEB DEVLOPMENT\canvas\male0164.png d:\WEB DEVLOPMENT\canvas\male0165.png d:\WEB DEVLOPMENT\canvas\male0166.png d:\WEB DEVLOPMENT\canvas\male0167.png d:\WEB DEVLOPMENT\canvas\male0168.png d:\WEB DEVLOPMENT\canvas\male0169.png d:\WEB DEVLOPMENT\canvas\male0170.png d:\WEB DEVLOPMENT\canvas\male0171.png d:\WEB DEVLOPMENT\canvas\male0172.png d:\WEB DEVLOPMENT\canvas\male0173.png d:\WEB DEVLOPMENT\canvas\male0174.png d:\WEB DEVLOPMENT\canvas\male0175.png d:\WEB DEVLOPMENT\canvas\male0176.png d:\WEB DEVLOPMENT\canvas\male0177.png d:\WEB DEVLOPMENT\canvas\male0178.png d:\WEB DEVLOPMENT\canvas\male0179.png d:\WEB DEVLOPMENT\canvas\male0180.png d:\WEB DEVLOPMENT\canvas\male0181.png d:\WEB DEVLOPMENT\canvas\male0182.png d:\WEB DEVLOPMENT\canvas\male0183.png d:\WEB DEVLOPMENT\canvas\male0184.png d:\WEB DEVLOPMENT\canvas\male0185.png d:\WEB DEVLOPMENT\canvas\male0186.png d:\WEB DEVLOPMENT\canvas\male0187.png d:\WEB DEVLOPMENT\canvas\male0188.png d:\WEB DEVLOPMENT\canvas\male0189.png d:\WEB DEVLOPMENT\canvas\male0190.png d:\WEB DEVLOPMENT\canvas\male0191.png d:\WEB DEVLOPMENT\canvas\male0192.png d:\WEB DEVLOPMENT\canvas\male0193.png d:\WEB DEVLOPMENT\canvas\male0194.png d:\WEB DEVLOPMENT\canvas\male0195.png d:\WEB DEVLOPMENT\canvas\male0196.png d:\WEB DEVLOPMENT\canvas\male0197.png d:\WEB DEVLOPMENT\canvas\male0198.png d:\WEB DEVLOPMENT\canvas\male0199.png d:\WEB DEVLOPMENT\canvas\male0200.png d:\WEB DEVLOPMENT\canvas\male0201.png d:\WEB DEVLOPMENT\canvas\male0202.png d:\WEB DEVLOPMENT\canvas\male0203.png d:\WEB DEVLOPMENT\canvas\male0204.png d:\WEB DEVLOPMENT\canvas\male0205.png d:\WEB DEVLOPMENT\canvas\male0206.png d:\WEB DEVLOPMENT\canvas\male0207.png d:\WEB DEVLOPMENT\canvas\male0208.png d:\WEB DEVLOPMENT\canvas\male0209.png d:\WEB DEVLOPMENT\canvas\male0210.png d:\WEB DEVLOPMENT\canvas\male0211.png d:\WEB DEVLOPMENT\canvas\male0212.png d:\WEB DEVLOPMENT\canvas\male0213.png d:\WEB DEVLOPMENT\canvas\male0214.png d:\WEB DEVLOPMENT\canvas\male0215.png d:\WEB DEVLOPMENT\canvas\male0216.png d:\WEB DEVLOPMENT\canvas\male0217.png d:\WEB DEVLOPMENT\canvas\male0218.png d:\WEB DEVLOPMENT\canvas\male0219.png d:\WEB DEVLOPMENT\canvas\male0220.png d:\WEB DEVLOPMENT\canvas\male0221.png d:\WEB DEVLOPMENT\canvas\male0222.png d:\WEB DEVLOPMENT\canvas\male0223.png d:\WEB DEVLOPMENT\canvas\male0224.png d:\WEB DEVLOPMENT\canvas\male0225.png d:\WEB DEVLOPMENT\canvas\male0226.png d:\WEB DEVLOPMENT\canvas\male0227.png d:\WEB DEVLOPMENT\canvas\male0228.png d:\WEB DEVLOPMENT\canvas\male0229.png d:\WEB DEVLOPMENT\canvas\male0230.png d:\WEB DEVLOPMENT\canvas\male0231.png d:\WEB DEVLOPMENT\canvas\male0232.png d:\WEB DEVLOPMENT\canvas\male0233.png d:\WEB DEVLOPMENT\canvas\male0234.png d:\WEB DEVLOPMENT\canvas\male0235.png d:\WEB DEVLOPMENT\canvas\male0236.png d:\WEB DEVLOPMENT\canvas\male0237.png d:\WEB DEVLOPMENT\canvas\male0238.png d:\WEB DEVLOPMENT\canvas\male0239.png d:\WEB DEVLOPMENT\canvas\male0240.png d:\WEB DEVLOPMENT\canvas\male0241.png d:\WEB DEVLOPMENT\canvas\male0242.png d:\WEB DEVLOPMENT\canvas\male0243.png d:\WEB DEVLOPMENT\canvas\male0244.png d:\WEB DEVLOPMENT\canvas\male0245.png d:\WEB DEVLOPMENT\canvas\male0246.png d:\WEB DEVLOPMENT\canvas\male0247.png d:\WEB DEVLOPMENT\canvas\male0248.png d:\WEB DEVLOPMENT\canvas\male0249.png d:\WEB DEVLOPMENT\canvas\male0250.png d:\WEB DEVLOPMENT\canvas\male0251.png d:\WEB DEVLOPMENT\canvas\male0252.png d:\WEB DEVLOPMENT\canvas\male0253.png d:\WEB DEVLOPMENT\canvas\male0254.png d:\WEB DEVLOPMENT\canvas\male0255.png d:\WEB DEVLOPMENT\canvas\male0256.png d:\WEB DEVLOPMENT\canvas\male0257.png d:\WEB DEVLOPMENT\canvas\male0258.png d:\WEB DEVLOPMENT\canvas\male0259.png d:\WEB DEVLOPMENT\canvas\male0260.png d:\WEB DEVLOPMENT\canvas\male0261.png d:\WEB DEVLOPMENT\canvas\male0262.png d:\WEB DEVLOPMENT\canvas\male0263.png d:\WEB DEVLOPMENT\canvas\male0264.png d:\WEB DEVLOPMENT\canvas\male0265.png d:\WEB DEVLOPMENT\canvas\male0266.png d:\WEB DEVLOPMENT\canvas\male0267.png d:\WEB DEVLOPMENT\canvas\male0268.png d:\WEB DEVLOPMENT\canvas\male0269.png d:\WEB DEVLOPMENT\canvas\male0270.png d:\WEB DEVLOPMENT\canvas\male0271.png d:\WEB DEVLOPMENT\canvas\male0272.png d:\WEB DEVLOPMENT\canvas\male0273.png d:\WEB DEVLOPMENT\canvas\male0274.png d:\WEB DEVLOPMENT\canvas\male0275.png d:\WEB DEVLOPMENT\canvas\male0276.png d:\WEB DEVLOPMENT\canvas\male0277.png d:\WEB DEVLOPMENT\canvas\male0278.png d:\WEB DEVLOPMENT\canvas\male0279.png d:\WEB DEVLOPMENT\canvas\male0280.png d:\WEB DEVLOPMENT\canvas\male0281.png d:\WEB DEVLOPMENT\canvas\male0282.png d:\WEB DEVLOPMENT\canvas\male0283.png d:\WEB DEVLOPMENT\canvas\male0284.png d:\WEB DEVLOPMENT\canvas\male0285.png d:\WEB DEVLOPMENT\canvas\male0286.png d:\WEB DEVLOPMENT\canvas\male0287.png d:\WEB DEVLOPMENT\canvas\male0288.png d:\WEB DEVLOPMENT\canvas\male0289.png d:\WEB DEVLOPMENT\canvas\male0290.png d:\WEB DEVLOPMENT\canvas\male0291.png d:\WEB DEVLOPMENT\canvas\male0292.png d:\WEB DEVLOPMENT\canvas\male0293.png d:\WEB DEVLOPMENT\canvas\male0294.png d:\WEB DEVLOPMENT\canvas\male0295.png d:\WEB DEVLOPMENT\canvas\male0296.png d:\WEB DEVLOPMENT\canvas\male0297.png d:\WEB DEVLOPMENT\canvas\male0298.png d:\WEB DEVLOPMENT\canvas\male0299.png d:\WEB DEVLOPMENT\canvas\male0300.png 
`;
return data.split("\n")[index];

}

const frameCount = 300;
const images = [];
const imageSeq = {
    frame : 1,
};

for(let i = 0; i < frameCount; i++ ){
    const img  = new images();
    img.src = files(i);
    images.push(img);

}

gsap.to(imageSeq,{
 frame: frameCount - 1,
 snap: "frame",
 ease: `none`,
 scrollTrigger:{
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end : `600% top`,
    scroller: `#main`,

 },
 onUpdate: render,

});

images[1].onload = render;
function render(){
    scaleImage(images[imageSeq.frame],context);
}


function scaleImage(img,ctx){
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var ratio = Math.max(hRatio  , vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) /2;
       var centerShift_y = (canvas.height - img.height * ratio )/2;
       ctx.clearRect(0,0,canvas.width,canvas.height);
       ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio

       );
}

scrollTrigger.create({
    trigger: "#page>canvas",
    pin:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
});

gsap.to("#page1",{
    scrollTrigger:{
        trigger: `#page1`,
        start: `top top`,
        end : `bottom top `,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page2",{
    scrollTrigger:{
        trigger: `#page2`,
        start: `top top`,
        end : `bottom top `,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page3",{
    scrollTrigger:{
        trigger: `#page3`,
        start: `top top`,
        end : `bottom top `,
        pin: true,
        scroller: `#main`
    }
})