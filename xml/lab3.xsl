<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Waterbodies</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Area</th>
      <th style="text-align:left">Region</th>
      <th style="text-align:left">Type</th>
    </tr>
    <xsl:for-each select="forests/waterbodies">
    <tr>
      <td><xsl:value-of select="area"/></td>
      <td><xsl:value-of select="region"/></td>
      <td><xsl:value-of select="type"/></td>
    </tr>
    </xsl:for-each>
  </table>

    <h2>Forest departments</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Department ID</th>
      <th style="text-align:left">Branch</th>
      <th style="text-align:left">Location</th>
      <th style="text-align:left">Force</th>
    </tr>
    <xsl:for-each select="forests/forestdept">
    <tr>
      <td><xsl:value-of select="deptid"/></td>
      <td><xsl:value-of select="branch"/></td>
      <td><xsl:value-of select="location"/></td>
      <td><xsl:value-of select="force"/></td>
    </tr>
    </xsl:for-each>
  </table>

    <h2>Resorts</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">License Number</th>
      <th style="text-align:left">Area Occupied</th>
      <th style="text-align:left">Lease Period</th>
      <th style="text-align:left">Owner Name</th>
    </tr>
    <xsl:for-each select="forests/resorts">
    <tr>
      <td><xsl:value-of select="licsno"/></td>
      <td><xsl:value-of select="areaocc"/></td>
      <td><xsl:value-of select="leaseperiod"/></td>
      <td><xsl:value-of select="ownername"/></td>
    </tr>
    </xsl:for-each>
  </table>

</body>
</html>
</xsl:template>
</xsl:stylesheet>