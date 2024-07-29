import React from "react";

function Trajectory({profilePhoto}) {
 
  const {src} = profilePhoto

  console.log("estas son las props de perfil", src)
  return (
    <>
<div className="row position-relative w-100 h-100">
<div className="col-6 ">
<img className="position-relative p-0 m-0 w-100 h-100"  style={{ objectFit: 'cover' }} src={src} alt="profile" />
</div>
<div className="col-6">
<h3 className="subtitle">
  Yo soy
</h3>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non justo ac ligula vehicula faucibus. Quisque lobortis semper sapien, vel vestibulum ligula. Proin vestibulum orci ac nisi luctus, eget aliquam purus molestie. Duis at nisi convallis, rhoncus nisi non, vestibulum lacus. Sed eu ex a nisi tincidunt laoreet. Suspendisse et nisi a nulla vestibulum laoreet. Pellentesque sodales aliquet lacus, nec consequat libero consequat a. Integer mattis, mi et fermentum sollicitudin, purus magna porta ipsum, a aliquet enim mi in arcu. Phasellus lobortis justo id ipsum viverra, in ullamcorper elit dapibus. Suspendisse in arcu vel ligula dapibus pellentesque. Nulla facilisi. Vivamus in dui non purus dignissim accumsan. Nulla facilisi. Phasellus nec nibh nec ante fermentum feugiat nec sit amet quam. Nunc sit amet libero arcu. Sed vestibulum neque velit, nec tincidunt nisi fermentum sit amet. Cras auctor augue vel tellus vehicula, sed fringilla odio vestibulum
</p>
</div>
</div>
    </>
  );
}

export default Trajectory;
 