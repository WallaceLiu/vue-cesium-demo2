define(["./Cartesian2-08065eec","./when-ad3237a0","./EllipseOutlineGeometry-c452da20","./Check-be2d5acb","./Math-5ca9b250","./GeometryOffsetAttribute-03006e80","./Transforms-475655a6","./combine-1510933d","./RuntimeError-767bd866","./ComponentDatatype-a867ddaa","./WebGLConstants-1c8239cc","./EllipseGeometryLibrary-5371666a","./GeometryAttribute-9b226476","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550"],function(r,n,i,e,t,a,o,c,l,s,d,u,m,b,p){"use strict";return function(e,t){return(e=n.defined(t)?i.EllipseOutlineGeometry.unpack(e,t):e)._center=r.Cartesian3.clone(e._center),e._ellipsoid=r.Ellipsoid.clone(e._ellipsoid),i.EllipseOutlineGeometry.createGeometry(e)}});