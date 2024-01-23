if (-1 || 0) alert( 'first' ); //  -1 || 0 = -1, truthy

if (-1 && 0) alert( 'second' );  // -1 && 0 = 0, falsy

if (null || -1 && 1) alert( 'third' ); // null || -1 && 1  ->  null || 1  ->  1
