#!/bin/bash
#scp -r _site/* mllab@cse.ucdenver.edu:/home/mllab/public_html/
rsync -zarvh --delete -e ssh _site/ mllab@cse.ucdenver.edu:/home/mllab/public_html/
