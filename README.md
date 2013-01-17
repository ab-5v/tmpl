TMPL
====

Replace `PROJECTNAME` placeholder with your real project name and you are ready to go:

    rm -rf .git && find . -type f -exec sed -i '' 's/PROJECTNAME/REALNAME/g' {} \; && make
