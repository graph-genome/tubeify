var n=function(n,e,t){this.tile=n,this.max_bin=e,this.tiles_range=-1===n?Array.from(new Array(this.max_bin)).map(function(n,e){return e}):Array.from(new Array(n)).map(function(t,r){return Math.round(e*r/n)}),this.bin_length=t||0};n.prototype.tiled=function(n){},n.prototype.tubeify=function(n){var e=this,t=[],r=-1,i=-1;n.forEach(function(n){i!==n.path_name?(r=0,i=n.path_name):r+=1;var a=[];n.prev_bin[0]!==n.bin-1&&a.push({type:"link",pos:0,seq:"translocation",query:n.prev_bin[0]}),n.next_bin[0]!==n.bin+1&&a.push({type:"link",pos:e.bin_length,seq:"translocation",query:n.next_bin[0]}),t.push({firstNodeOffset:0,finalNodeCoverLength:e.bin_length,sequenceQuality:60,is_secondary:!1,Sequence:[n.bin],Sequence_new:a,type:"read",name:n.path_name,id:r})});var a={},o=Array.from(new Array(this.max_bin)).map(function(n,t){return{name:String(t+1),sequenceLength:e.bin_length}});return a.nodes=o,a.paths=[{id:0,name:"1",sequence:o.map(function(n){return n.name})}],a.reads=t,a},exports.Tubeify=n;
//# sourceMappingURL=index.js.map
