import { ComponentPropsWithoutRef } from "react";

export const LinkedInIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            width={props.size}
            height={props.size}
            {...props}
        >
            <path fill="currentColor" d="M 75.015625 13.740234 L 23.804688 14.677734 A 2.0002 2.0002 0 0 0 23.695312 14.681641 C 23.695312 14.681641 21.704574 14.825359 19.625 16.011719 C 17.545426 17.198079 15.240707 19.617253 14.617188 23.578125 C 14.298991 25.601346 14.175562 29.269468 14.097656 33.96875 C 14.019746 38.668032 14.017265 44.276429 14.046875 49.671875 C 14.105835 60.415995 14.293269 70.226878 14.294922 70.3125 C 14.230682 70.708085 13.830971 73.298043 14.355469 76.384766 C 14.638358 78.049609 15.195699 79.850462 16.371094 81.419922 C 17.310528 82.674312 18.698894 83.724497 20.439453 84.296875 A 1.0001 1.0001 0 0 0 20.785156 84.40625 C 21.116572 84.500263 21.455322 84.583283 21.810547 84.640625 C 26.131543 85.338701 38.814659 85.953735 51.421875 86.179688 C 57.725483 86.292663 63.940742 86.295535 68.919922 86.125 C 71.409512 86.03973 73.587572 85.912069 75.34375 85.726562 C 77.099928 85.541057 78.313415 85.409193 79.484375 84.853516 C 85.623637 81.940141 85.964844 74.175781 85.964844 74.175781 A 2.0002 2.0002 0 0 0 85.972656 74.013672 L 85.867188 25.191406 C 86.029725 22.531598 85.253831 19.974396 83.480469 18.023438 C 81.672647 16.034567 79.002586 14.684529 75.546875 13.802734 A 2.0002 2.0002 0 0 0 75.015625 13.740234 z M 74.744141 17.746094 C 77.591426 18.502306 79.468938 19.559037 80.519531 20.714844 C 81.597459 21.900723 82.011926 23.190276 81.873047 25.046875 A 2.0002 2.0002 0 0 0 81.867188 25.201172 L 81.871094 26.892578 A 1.0001 1.0001 0 0 0 81.552734 26.986328 L 70.349609 32.306641 A 1.0001 1.0001 0 1 0 71.207031 34.113281 L 81.875 29.046875 L 81.882812 32.285156 L 74.916016 35.220703 A 1.0004594 1.0004594 0 1 0 75.693359 37.064453 L 81.886719 34.455078 L 81.972656 73.884766 C 81.969164 73.912272 81.673155 76.204087 80.570312 78.296875 L 77.78125 74.861328 A 1.0001 1.0001 0 0 0 76.998047 74.480469 A 1.0001 1.0001 0 0 0 76.228516 76.121094 L 79.386719 80.013672 C 78.927924 80.514131 78.394515 80.943649 77.769531 81.240234 C 77.737241 81.255554 76.5247 81.578947 74.923828 81.748047 C 74.707413 81.770907 74.412299 81.787292 74.177734 81.808594 L 72.472656 78.064453 A 1.0001 1.0001 0 0 0 71.515625 77.466797 A 1.0001 1.0001 0 0 0 70.652344 78.892578 L 72.054688 81.974609 C 71.049992 82.035073 69.957734 82.08666 68.78125 82.126953 C 68.706449 82.129515 68.618382 82.13033 68.542969 82.132812 L 66.078125 78.445312 A 1.0001 1.0001 0 0 0 65.234375 77.988281 A 1.0001 1.0001 0 0 0 64.414062 79.556641 L 66.175781 82.189453 C 61.794356 82.28229 56.699277 82.27298 51.494141 82.179688 C 49.023966 82.135416 46.557328 82.059977 44.117188 81.982422 L 44.470703 77.988281 A 1.0001 1.0001 0 0 0 43.449219 76.886719 A 1.0001 1.0001 0 0 0 42.478516 77.8125 L 42.115234 81.927734 C 41.172705 81.894477 40.365229 81.849351 39.451172 81.8125 L 40.265625 79.347656 A 1.0001 1.0001 0 0 0 39.326172 78.019531 A 1.0001 1.0001 0 0 0 38.367188 78.71875 L 37.373047 81.722656 C 36.412633 81.680093 35.388579 81.643129 34.482422 81.597656 L 35.232422 79.052734 A 1.0001 1.0001 0 0 0 34.25 77.755859 A 1.0001 1.0001 0 0 0 33.314453 78.486328 L 32.429688 81.486328 C 31.337576 81.425873 30.430738 81.363493 29.466797 81.300781 L 31.226562 77.539062 A 1.0001 1.0001 0 0 0 30.349609 76.101562 A 1.0001 1.0001 0 0 0 29.416016 76.691406 L 27.322266 81.166016 C 26.273762 81.088373 25.288223 81.012027 24.503906 80.935547 L 25.621094 79.701172 A 1.0001 1.0001 0 0 0 24.910156 78.019531 A 1.0001 1.0001 0 0 0 24.138672 78.357422 L 22.101562 80.607422 C 20.884812 80.33801 20.154738 79.799238 19.572266 79.021484 C 18.932848 78.167694 18.512189 76.9705 18.298828 75.714844 C 17.872107 73.203531 18.269531 70.695314 18.269531 70.695312 A 2.0002 2.0002 0 0 0 18.296875 70.326172 C 18.296875 70.326172 18.189033 63.734089 18.109375 55.974609 L 22.558594 54.175781 A 1.0001 1.0001 0 0 0 22.167969 52.244141 A 1.0001 1.0001 0 0 0 21.808594 52.322266 L 18.087891 53.826172 C 18.074664 52.326594 18.053498 51.21319 18.044922 49.650391 C 18.035584 47.948998 18.038325 46.244119 18.037109 44.537109 L 21.828125 47.169922 A 1.0001 1.0001 0 1 0 22.96875 45.527344 L 18.03125 42.097656 C 18.03399 40.774976 18.050807 39.582989 18.060547 38.318359 L 23.345703 42.869141 A 1.0001 1.0001 0 1 0 24.650391 41.353516 L 18.082031 35.699219 C 18.088839 35.16442 18.089145 34.548572 18.097656 34.035156 C 18.174716 29.386719 18.355055 25.555498 18.568359 24.199219 C 19.00884 21.401091 20.327996 20.216218 21.607422 19.486328 C 22.883707 18.75823 23.977033 18.674243 23.982422 18.673828 L 40.818359 18.365234 L 42.603516 26.548828 A 1.0001 1.0001 0 1 0 44.556641 26.123047 L 42.857422 18.328125 L 45.591797 18.279297 L 46.035156 22.962891 A 1.000588 1.000588 0 1 0 48.027344 22.773438 L 47.597656 18.242188 L 58.671875 18.039062 L 57.988281 22.091797 A 1.0002025 1.0002025 0 0 0 59.960938 22.423828 L 60.705078 18.001953 L 63.625 17.949219 L 62.976562 20.804688 A 1.0001 1.0001 0 1 0 64.925781 21.248047 L 65.683594 17.912109 L 74.744141 17.746094 z M 30.841797 21.912109 C 30.726734 21.932172 30.614016 21.975719 30.509766 22.042969 C 30.092766 22.311969 29.971234 22.868156 30.240234 23.285156 C 30.509234 23.702156 31.067375 23.821734 31.484375 23.552734 C 31.901375 23.284734 32.020953 22.728547 31.751953 22.310547 C 31.550203 21.997797 31.186984 21.851922 30.841797 21.912109 z M 33.931641 29.205078 C 33.816578 29.225141 33.703859 29.268687 33.599609 29.335938 C 33.182609 29.604938 33.063031 30.161125 33.332031 30.578125 C 33.601031 30.995125 34.157219 31.114703 34.574219 30.845703 C 34.991219 30.576703 35.11275 30.020516 34.84375 29.603516 C 34.642 29.290766 34.276828 29.144891 33.931641 29.205078 z M 23.845703 29.291016 C 23.730641 29.311078 23.617922 29.354625 23.513672 29.421875 C 23.096672 29.690875 22.977094 30.247062 23.246094 30.664062 C 23.515094 31.081063 24.071281 31.202594 24.488281 30.933594 C 24.905281 30.664594 25.026812 30.106453 24.757812 29.689453 C 24.556063 29.376703 24.190891 29.230828 23.845703 29.291016 z M 38.09375 33.070312 C 37.015772 33.17901 35.693623 33.75542 34.484375 34.726562 C 33.879751 35.212134 33.322275 35.804533 32.951172 36.541016 C 32.580068 37.277498 32.419838 38.185006 32.65625 39.099609 C 33.447277 42.160988 35.956489 43.626346 38.494141 43.585938 C 41.219446 43.542538 43.667969 41.155984 43.242188 37.853516 C 42.819514 34.567237 40.211098 32.856662 38.09375 33.070312 z M 38.294922 35.060547 C 39.051574 34.984197 40.960485 35.797654 41.257812 38.109375 C 41.554031 40.406907 40.133585 41.559334 38.462891 41.585938 C 36.604542 41.615527 35.186769 40.90223 34.591797 38.599609 C 34.481709 38.173713 34.540217 37.830611 34.736328 37.441406 C 34.932443 37.052201 35.291577 36.644287 35.736328 36.287109 C 36.62583 35.572753 37.934899 35.09685 38.294922 35.060547 z M 61.939453 44.265625 C 59.95747 44.323665 58.081801 45.233981 56.611328 46.126953 C 55.808435 46.614525 55.744925 46.739261 55.244141 47.128906 L 55.076172 45.439453 A 1.0001 1.0001 0 0 0 54.048828 44.539062 L 47.40625 44.757812 A 1.0001 1.0001 0 0 0 46.439453 45.726562 L 45.667969 70.128906 A 1.0001 1.0001 0 0 0 46.644531 71.160156 L 54.847656 71.361328 A 1.0001 1.0001 0 0 0 55.871094 70.335938 C 55.871094 70.335938 55.793224 67.204398 55.742188 63.820312 C 55.716667 62.12827 55.698239 60.373434 55.699219 58.919922 C 55.700197 57.46641 55.729601 56.263858 55.769531 55.884766 C 55.96088 54.066956 57.261104 53.081005 58.701172 52.863281 C 60.14124 52.645558 61.537913 53.185427 62.089844 54.789062 C 62.155514 54.979808 62.339689 56.292979 62.423828 57.826172 C 62.507968 59.359364 62.555373 61.23155 62.580078 63.041016 C 62.629488 66.659946 62.589844 70.025391 62.589844 70.025391 A 1.0001 1.0001 0 0 0 63.595703 71.037109 L 70.765625 71.003906 A 1.0001 1.0001 0 0 0 71.759766 70.015625 C 71.759766 70.015625 71.804101 66.593877 71.775391 62.662109 C 71.746681 58.730342 71.659522 54.352751 71.339844 52.15625 C 70.683795 47.649674 66.989669 44.720236 62.794922 44.294922 C 62.508334 44.265864 62.222594 44.257334 61.939453 44.265625 z M 34.564453 44.509766 A 1.0001 1.0001 0 0 0 33.53125 45.494141 L 33.123047 70.738281 A 1.0001 1.0001 0 0 0 34.210938 71.751953 L 42.322266 71.041016 A 1.0001 1.0001 0 0 0 43.236328 70.021484 L 42.681641 45.720703 A 1.0001 1.0001 0 0 0 41.714844 44.744141 L 34.564453 44.509766 z M 62.007812 46.267578 C 62.208306 46.25881 62.404463 46.264011 62.59375 46.283203 C 66.013003 46.629889 68.839377 48.857935 69.361328 52.443359 C 69.63065 54.293858 69.748806 58.767799 69.777344 62.675781 C 69.802044 66.058874 69.770349 68.261235 69.761719 69.007812 L 64.587891 69.033203 C 64.595391 68.252496 64.622708 66.137016 64.580078 63.013672 C 64.555158 61.188512 64.508638 59.297886 64.421875 57.716797 C 64.335105 56.135708 64.271299 54.983426 63.980469 54.138672 C 63.1144 51.622308 60.618276 50.549739 58.402344 50.884766 C 56.186412 51.219792 54.067902 52.95259 53.78125 55.675781 C 53.71368 56.317189 53.700209 57.4462 53.699219 58.917969 C 53.698228 60.389738 53.716577 62.153481 53.742188 63.851562 C 53.785168 66.701656 53.832759 68.551386 53.851562 69.335938 L 47.699219 69.1875 L 48.410156 46.726562 L 53.179688 46.568359 L 53.427734 49.0625 A 1.0001 1.0001 0 0 0 55.095703 49.703125 C 55.095703 49.703125 56.146181 48.749397 57.650391 47.835938 C 58.966574 47.036659 60.604358 46.328958 62.007812 46.267578 z M 35.515625 46.542969 L 40.703125 46.712891 L 41.214844 69.130859 L 35.140625 69.662109 L 35.515625 46.542969 z"/>
        </svg>
    )
} 