import os
files = os.listdir('./easy')
print 'Easy: ' + str(len(files))

files = os.listdir('./medium')
print 'Medium ' + str(len(files))

files = os.listdir('./hard')
print 'Hard: ' + str(len(files))