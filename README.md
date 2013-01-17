TMPL
====

Replace `HERE` placeholder with your real project name and you are ready to go:

    N=HERE && git clone git://github.com/artjock/tmpl.git $NAME && cd $NAME && rm -rf .git && find . -type f -exec sed -i "" "s/PROJECTNAME/$N/g" {} \; && make
