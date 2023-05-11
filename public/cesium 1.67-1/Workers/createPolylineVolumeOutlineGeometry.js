/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./when-a55a8a4c","./Check-bc1d37d9","./Math-d7cbfcf6","./Cartesian2-6ec3db89","./Transforms-a4d7073e","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-919a7463","./GeometryAttribute-291ff23b","./GeometryAttributes-1c7ce91d","./IndexDatatype-4351ba4c","./IntersectionTests-3d9e1b94","./Plane-37b84dad","./arrayRemoveDuplicates-69403a22","./BoundingRectangle-e7351c16","./EllipsoidTangentPlane-323c7a98","./EllipsoidRhumbLine-4d1a57d2","./PolygonPipeline-5b0d203a","./PolylineVolumeGeometryLibrary-41894c8d","./EllipsoidGeodesic-365e69f7","./PolylinePipeline-83c8909c"],function(d,c,t,u,y,e,i,h,f,g,v,r,n,o,a,l,s,p,m,E,P){"use strict";function _(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,r=e.shapePositions;if(!d.defined(i))throw new c.DeveloperError("options.polylinePositions is required.");if(!d.defined(r))throw new c.DeveloperError("options.shapePositions is required.");this._positions=i,this._shape=r,this._ellipsoid=u.Ellipsoid.clone(d.defaultValue(e.ellipsoid,u.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,m.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,t.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var n=1+i.length*u.Cartesian3.packedLength;n+=1+r.length*u.Cartesian2.packedLength,this.packedLength=n+u.Ellipsoid.packedLength+2}_.pack=function(e,i,r){if(!d.defined(e))throw new c.DeveloperError("value is required");if(!d.defined(i))throw new c.DeveloperError("array is required");var n;r=d.defaultValue(r,0);var t=e._positions,o=t.length;for(i[r++]=o,n=0;n<o;++n,r+=u.Cartesian3.packedLength)u.Cartesian3.pack(t[n],i,r);var a=e._shape;for(o=a.length,i[r++]=o,n=0;n<o;++n,r+=u.Cartesian2.packedLength)u.Cartesian2.pack(a[n],i,r);return u.Ellipsoid.pack(e._ellipsoid,i,r),r+=u.Ellipsoid.packedLength,i[r++]=e._cornerType,i[r]=e._granularity,i};var k=u.Ellipsoid.clone(u.Ellipsoid.UNIT_SPHERE),C={polylinePositions:void 0,shapePositions:void 0,ellipsoid:k,height:void 0,cornerType:void 0,granularity:void 0};_.unpack=function(e,i,r){if(!d.defined(e))throw new c.DeveloperError("array is required");var n;i=d.defaultValue(i,0);var t=e[i++],o=new Array(t);for(n=0;n<t;++n,i+=u.Cartesian3.packedLength)o[n]=u.Cartesian3.unpack(e,i);t=e[i++];var a=new Array(t);for(n=0;n<t;++n,i+=u.Cartesian2.packedLength)a[n]=u.Cartesian2.unpack(e,i);var l=u.Ellipsoid.unpack(e,i,k);i+=u.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(r)?(r._positions=o,r._shape=a,r._ellipsoid=u.Ellipsoid.clone(l,r._ellipsoid),r._cornerType=s,r._granularity=p,r):(C.polylinePositions=o,C.shapePositions=a,C.cornerType=s,C.granularity=p,new _(C))};var b=new a.BoundingRectangle;return _.createGeometry=function(e){var i=e._positions,r=o.arrayRemoveDuplicates(i,u.Cartesian3.equalsEpsilon),n=e._shape;if(n=m.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(n),!(r.length<2||n.length<3)){p.PolygonPipeline.computeWindingOrder2D(n)===p.WindingOrder.CLOCKWISE&&n.reverse();var t=a.BoundingRectangle.fromPoints(n,b);return function(e,i){var r=new g.GeometryAttributes;r.position=new f.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var n,t,o=i.length,a=r.position.values.length/3,l=e.length/3/o,s=v.IndexDatatype.createTypedArray(a,2*o*(1+l)),p=0,d=(n=0)*o;for(t=0;t<o-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=o-1+d,s[p++]=d,d=(n=l-1)*o,t=0;t<o-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=o-1+d,s[p++]=d,n=0;n<l-1;n++){var c=o*n,u=c+o;for(t=0;t<o;t++)s[p++]=t+c,s[p++]=t+u}return new f.Geometry({attributes:r,indices:v.IndexDatatype.createTypedArray(a,s),boundingSphere:y.BoundingSphere.fromVertices(e),primitiveType:f.PrimitiveType.LINES})}(m.PolylineVolumeGeometryLibrary.computePositions(r,n,t,e,!1),n)}},function(e,i){return d.defined(i)&&(e=_.unpack(e,i)),e._ellipsoid=u.Ellipsoid.clone(e._ellipsoid),_.createGeometry(e)}});