!function(n){"use strict";n.extend(n.fn.select2.defaults,{formatNoMatches:function(){return"Non se atoparon resultados"},formatInputTooShort:function(n,e){var t=e-n.length;return 1===t?"Engada un car\xe1cter":"Engada "+t+" caracteres"},formatInputTooLong:function(n,e){var t=n.length-e;return 1===t?"Elimine un car\xe1cter":"Elimine "+t+" caracteres"},formatSelectionTooBig:function(n){return 1===n?"S\xf3 pode seleccionar un elemento":"S\xf3 pode seleccionar "+n+" elementos"},formatLoadMore:function(){return"Cargando m\xe1is resultados..."},formatSearching:function(){return"Buscando..."}})}(jQuery);