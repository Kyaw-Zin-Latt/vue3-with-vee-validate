const sweetToast = {
    methods: {
        showAlert(title) {
            // Use sweetalert2
            const Toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                },
                padding: '2px'
            })

            Toast.fire({
                icon: 'success',
                title: title,
            })
        },
    },
};

export default sweetToast;