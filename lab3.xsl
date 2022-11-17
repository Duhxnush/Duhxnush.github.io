<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Waterbodies</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Artist</th>
    </tr>
    <xsl:for-each select="forests/waterbodies">
    <tr>
      <td><xsl:value-of select="area"/></td>
      <td><xsl:value-of select="region"/></td>
      <td><xsl:value-of select="type"/></td>
    </tr>
    </xsl:for-each>
  </table>

    <h2>forestdept</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Artist</th>
    </tr>
    <xsl:for-each select="forests/waterbodies">
    <tr>
      <td><xsl:value-of select="area"/></td>
      <td><xsl:value-of select="region"/></td>
      <td><xsl:value-of select="type"/></td>
    </tr>
    </xsl:for-each>
  </table>

    <h2>Waterbodies</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Artist</th>
    </tr>
    <xsl:for-each select="forests/waterbodies">
    <tr>
      <td><xsl:value-of select="area"/></td>
      <td><xsl:value-of select="region"/></td>
      <td><xsl:value-of select="type"/></td>
    </tr>
    </xsl:for-each>
  </table>

</body>
</html>
</xsl:template>
</xsl:stylesheet>