<script>
/* 第三方跳转 */
export default {
  name: 'AuthRedirect',
  created () {
    const hash = window.location.search.slice(1)
    if (window.localStorage) {
      window.localStorage.setItem('x-access-oauth-code', hash)
      window.close()
    }
  },
  render: function (h) {
    return h() // avoid warning message
  }
}
</script>
