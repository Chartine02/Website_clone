a =
  "f\
i";
b =
  "b\
u";
c =
  "z\
z";
f = (n) => (n % 15 ? (n % 5 ? (n % 3 ? n : a + c) : b + c) : a + c + b + c);
