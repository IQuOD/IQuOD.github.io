import matplotlib.pyplot as plt
import numpy as np

plt.figure(figsize=(5, 5))

plt.axes().axis('off')
plt.subplots_adjust(left=0.05, right=0.95, top=0.95, bottom=0.05)

xvals = np.arange(0, 1.00001, 0.0001)
yvals = 1.0 - np.abs(np.sin(xvals * np.pi * 6.0) / 20.0)
plt.fill_between(xvals, yvals, color=(0, 0, 0.5))

fontsize = 75
family = 'monospace'
plt.text(0.5, 0.82, 'I', 
         horizontalalignment='center', 
         verticalalignment='center',
         color='white',
         fontsize=fontsize, 
         family=family,
         weight='bold',
         stretch=1000)
plt.text(0.5, 0.63, 'Q', 
         horizontalalignment='center', 
         verticalalignment='center',
         color='white',
         fontsize=fontsize, 
         family=family,
         weight='bold')
plt.text(0.6, 0.465, 'u', 
         horizontalalignment='center', 
         verticalalignment='center',
         color='red',
         fontsize=fontsize, 
         family=family,
         weight='bold')
plt.text(0.5, 0.29, 'O', 
         horizontalalignment='center', 
         verticalalignment='center',
         color='white',
         fontsize=fontsize, 
         family=family,
         weight='bold')
plt.text(0.5, 0.10, 'D', 
         horizontalalignment='center', 
         verticalalignment='center',
         color='white',
         fontsize=fontsize, 
         family=family,
         weight='bold')

plt.show()

