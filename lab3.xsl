<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
  <head>
  <title>Lab1</title>
  <style>
    table table
    {
      text-align: center;
      border-radius:20px;
      background-color: antiquewhite;
    }
     table
    {
      text-align: center;
    }
  </style>
  <link rel="stylesheet" href="css/style.css"/>
  </head>
  <body style="font-family:Century Gothic;margin:0;" class="backg">
  <div style="background-color: rgb(3, 137, 3);border-radius: 5px;"><h1 align="center">forestonline.go</h1></div>
  <center>
  <h1>Dashboard</h1>

  <table width=" 80%" border="1">
  <tr>
  <td>
  <h2>Waterbodies</h2>
  <table width="100%">
    <tr>

      <th>Area</th>
      <th>Region</th>
      <th>Type</th>
    </tr>
    <xsl:for-each select="forests/waterbodies">
    <xsl:sort select="area"/>
    <tr>
      <td><xsl:value-of select="area"/></td>
      <td><xsl:value-of select="region"/></td>
      <td><xsl:value-of select="type"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </td>
  <td>
    <h2>Forest departments</h2>
  <table width="100%">
    <tr>
      <th >Department ID</th>
      <th>Branch</th>
      <th>Location</th>
      <th>Force</th>
    </tr>
    <xsl:for-each select="forests/forestdept">
     <xsl:if test="force &gt; 14 ">
    <tr>
      <td><xsl:value-of select="deptid"/></td>
      <td><xsl:value-of select="branch"/></td>
      <td><xsl:value-of select="location"/></td>
      <td><xsl:value-of select="force"/></td>
    </tr>
    </xsl:if>
    </xsl:for-each>
  </table>
  </td>
  </tr>
  <tr>
  <td>
    <h2>Resorts</h2>
  <table width="100%">
    <tr>
      <th>License Number</th>
      <th>Area Occupied</th>
      <th>Lease Period</th>
      <th>Owner Name</th>
    </tr>
    <xsl:for-each select="forests/resorts">
    <tr>
      <td><xsl:value-of select="licsno"/></td>
        <xsl:choose>
        <xsl:when test="areaocc &gt; 10">
          <td bgcolor="red"><xsl:value-of select="areaocc"/></td>
        </xsl:when>
        <xsl:otherwise>
          <td><xsl:value-of select="areaocc"/></td>
        </xsl:otherwise>
      </xsl:choose>
      
      <td><xsl:value-of select="leaseperiod"/></td>
      <td><xsl:value-of select="ownername"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </td>
  
  <td>
    <h2>Animals</h2>
  <table width="100%">
    <tr>
      <th>Name</th>
      <th>Count</th>
      <th>Found In</th>
      <th>Species</th>
    </tr>
    <xsl:for-each select="forests/animals">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="count"/></td>
      <td><xsl:value-of select="foundin"/></td>
      <td><xsl:value-of select="species"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </td>
  </tr>
  </table>
  </center>
</body>
</html>
</xsl:template>
</xsl:stylesheet>