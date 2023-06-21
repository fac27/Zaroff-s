import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar__container}>
      <ul className={styles.navbar}>
        <li className={styles.left}>
          <IslandIcon fill="#333" size="2rem" />
        </li>
        <li className={styles.right}>
          <CartIcon fill="#333" class="cart" size="2rem" />
        </li>
      </ul>
    </nav>
  );
}

const CartIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.size}
    fill={props.fill}
    viewBox="0 0 512 512"
  >
    <defs></defs>
    <title>cart-outline</title>
    <path
      class="cls-1"
      d="M512,204.69a51.27,51.27,0,0,0-51.2-51.22H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H51.2a51.21,51.21,0,0,0-24.55,96.15L66.76,450.23A77,77,0,0,0,142.07,512H369.93a77,77,0,0,0,75.31-61.76l40.11-200.62A51.26,51.26,0,0,0,512,204.69ZM242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47h-271ZM51.2,179.08H460.8a25.61,25.61,0,0,1,0,51.22H51.2a25.61,25.61,0,0,1,0-51.22ZM420.14,445.22a51.34,51.34,0,0,1-50.21,41.17H142.07a51.34,51.34,0,0,1-50.21-41.18L54,255.91H458ZM243.2,409.56V332.74a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0V332.74a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm128,0V332.74a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Z"
    />
  </svg>
);

const IslandIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    height={props.size}
    width={props.size}
    viewBox="0 0 488.798 488.798"
  >
    <path
      d="M488.798,135.222l-5.559-10.515c-16.629-31.457-41.852-48.581-76.913-52.127c0.449-12.111,1.283-32.889,2.168-46.425
	l0.635-9.708l-9.686-0.902c-31.372-2.918-52.056,9.297-63.892,20.063c-5.713,5.197-9.954,10.575-12.92,14.986
	c-14.822-7.584-45.612-19.377-81.617-10.488l-11.644,2.875l4.921,10.937c8.565,19.035,18.833,36.976,24.914,47.109
	c-5.275,3.629-12.316,8.883-19.259,15.309c-19.483,18.032-28.336,35.892-26.314,53.084l1.19,10.114l10.091-1.374
	c13.063-1.779,22.98-2.722,31.731-3.554c5.713-0.543,10.994-1.046,16.462-1.704c-1.198,12.692-0.739,32.374,8.132,54.489
	l4.812,11.996l10.403-7.67c26.002-19.169,36.639-31.293,44.405-40.146c0.249-0.284,0.487-0.555,0.73-0.831
	c10.542,32.834,32.945,124.205-13.245,200.381c-17.369-9.795-39.5-17.032-67.004-17.032c-34.126,0-59.987,11.136-78.73,24.483
	c-39.87-16.951-55.195-66.365-61.004-98.131c5.376,5.282,12.741,11.738,23.778,19.876l10.405,7.672l4.812-11.999
	c6.107-15.231,7-29.003,6.442-38.737c9.317,0.716,18.382,0.155,35.064-1.672l7.913-0.867l0.93-7.906
	c1.131-9.621-1.58-24.289-20.919-39.534c-3.992-3.146-8.03-5.792-11.513-7.866c4.626-7.865,11.313-19.859,16.999-32.495
	l4.922-10.938l-11.645-2.875c-26.019-6.422-48.504,1.248-60.534,7.027c-2.188-3.017-5.073-6.437-8.757-9.787
	c-9.193-8.361-25.245-17.853-49.527-15.594l-9.686,0.902l0.635,9.708c0.603,9.217,1.171,22.97,1.518,32.132
	c-25.774,3.24-44.443,16.361-56.884,39.896L0,247.9l11.313,3.67c13.542,4.394,25.647,7.493,34.014,9.432
	c-5.083,13.18-9.966,29.318-4.084,50.368l3.875,13.867l11.641-8.474c4.201-3.058,8.458-6.324,12.576-9.483
	c10.048-7.708,20.339-15.6,29.96-20.572c1.336,11.624,4.194,29.349,10.244,48.292c11.808,36.968,31.126,63.462,56.365,77.619
	c-1.523,1.501-2.977,2.993-4.343,4.463c-19.62,21.116-27.604,42.237-27.935,43.125l-5.011,13.484h265.451l-5.011-13.484
	c-0.331-0.889-8.315-22.009-27.935-43.125c-4.508-4.852-9.869-9.934-16.128-14.835c25.668-41.983,35.929-94.169,29.7-151.628
	c-3.003-27.698-9.118-50.625-13.621-64.759c13.472,6.8,27.733,17.726,41.654,28.404c5.507,4.225,11.202,8.594,16.803,12.671
	l11.642,8.476l3.875-13.87c8.154-29.185,0.252-51.292-6.83-69.18c11.09-2.477,28.957-6.88,49.271-13.47L488.798,135.222z
	 M58.641,290.277c0.441-9.814,3.812-18.275,7.107-26.55c0.864-2.168,1.757-4.411,2.563-6.604l4.101-11.155l-11.691-2.133
	c-0.158-0.029-13.174-2.43-30.873-7.513c7.864-10.088,20.401-18.965,43.208-19.596l10.049-0.278l-0.331-10.047
	c-0.029-0.874-0.578-17.417-1.297-31.793c24.552,2.175,33.59,21.973,33.98,22.854l4.793,11.221l10.086-6.882
	c0.207-0.141,17.911-11.988,41.132-11.058c-7.658,14.956-15.322,26.96-15.418,27.11l-6.283,9.806l10.642,4.729
	c8.611,3.826,24.288,13.723,29.226,24.357c-14.465,1.311-21.155,0.98-32.767-0.969l-16.032-2.751l4.805,15.51
	c0.042,0.141,3.246,11.36,0.266,26.858c-9.818-8.12-14.771-13.764-18.953-18.531c-3.787-4.315-7.363-8.391-13.02-12.405
	l-3.698-2.624l-4.41,1.052C89.686,266.737,73.915,278.569,58.641,290.277z M363.532,453.692H159.149
	c3.939-6.715,9.702-15.169,17.572-23.541c22.5-23.931,50.97-36.064,84.619-36.064c33.649,0,62.119,12.134,84.619,36.064
	C353.831,438.524,359.593,446.979,363.532,453.692z M412.803,135.142l-11.688,2.134l4.097,11.152
	c1.068,2.909,2.209,5.772,3.416,8.803c5.314,13.348,10.771,27.049,9.745,43.83c-1.164-0.891-2.324-1.781-3.476-2.664
	c-20.852-15.996-42.413-32.537-64.08-37.708l-4.411-1.053l-3.698,2.625c-7.266,5.157-11.723,10.237-16.883,16.12
	c-6.29,7.169-13.86,15.798-30.182,28.786c-6.19-24.535-0.851-42.978-0.798-43.152l4.809-15.512l-16.016,2.689
	c-10.407,1.747-18.971,2.561-28.887,3.504c-5.939,0.564-12.404,1.179-20.024,2.066c3.169-9.561,11.29-18.756,18.557-25.519
	c11.774-10.957,24.306-18.299,24.58-18.459l9.064-5.238l-5.653-8.816c-0.14-0.219-12.104-18.942-23.202-41.318
	c34.963-3.486,62.254,14.872,62.535,15.064l10.114,7.023l4.799-11.341c0.145-0.343,13.918-31.779,52.414-33.007
	c-1.069,20.261-1.934,46.151-1.943,46.457l-0.334,10.049l10.052,0.278c18.569,0.514,44.414,4.576,63.489,31.695
	C432.991,131.408,413.03,135.1,412.803,135.142z"
    />
  </svg>
);
