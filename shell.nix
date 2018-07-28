with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/151afd245708bbd441ce374b1661064862843739) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-9_x ];
}
