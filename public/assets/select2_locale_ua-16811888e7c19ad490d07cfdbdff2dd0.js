!function(t){"use strict";t.extend(t.fn.select2.defaults,{formatNoMatches:function(){return"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"},formatInputTooShort:function(t,n){var r=n-t.length,o=["","\u0438","\u0456\u0432"],e=[2,0,1,1,1,2];return"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0443\u043b\u044c \u043b\u0430\u0441\u043a\u0430 \u0449\u0435 "+r+" \u0441\u0438\u043c\u0432\u043e\u043b"+o[r%100>4&&20>=r%100?2:e[Math.min(r%10,5)]]},formatInputTooLong:function(t,n){var r=t.length-n,o=["","\u0438","\u0456\u0432"],e=[2,0,1,1,1,2];return"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0443\u043b\u044c \u043b\u0430\u0441\u043a\u0430 \u043d\u0430 "+r+" \u0441\u0438\u043c\u0432\u043e\u043b"+o[r%100>4&&20>=r%100?2:e[Math.min(r%10,5)]]+" \u043c\u0435\u043d\u0448\u0435"},formatSelectionTooBig:function(t){var n=["","\u0438","\u0456\u0432"],r=[2,0,1,1,1,2];return"\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 "+t+" \u0435\u043b\u0435\u043c\u0435\u043d\u0442"+n[t%100>4&&20>=t%100?2:r[Math.min(t%10,5)]]},formatLoadMore:function(){return"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445..."},formatSearching:function(){return"\u041f\u043e\u0448\u0443\u043a..."}})}(jQuery);