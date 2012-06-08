return (function(){
    alert( bb );
    alert( this.bb );
    return 789;
}).call( this );