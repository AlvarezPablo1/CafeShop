const CartWidget = () => {
return (
    <div>
    <div className="carrito" class="dropdown dropdown-end">
        <label className="btn btn-ghost btn-circle">
    <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    </div>
        </label>
    <div  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body"></div>
    </div>
    </div>
</div>
)
}
export default CartWidget