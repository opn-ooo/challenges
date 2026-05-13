@REM Maven wrapper script for Windows
@REM ----------------------------------------------------------------------------
@echo off

set JAVA_CMD=java
if not "%JAVA_HOME%"=="" set JAVA_CMD=%JAVA_HOME%\bin\java

set MAVEN_WRAPPER_JAR=.mvn\wrapper\maven-wrapper.jar
set MAVEN_WRAPPER_PROPERTIES=.mvn\wrapper\maven-wrapper.properties

if not exist "%MAVEN_WRAPPER_JAR%" (
    for /f "tokens=2 delims==" %%A in ('findstr /i wrapperUrl "%MAVEN_WRAPPER_PROPERTIES%"') do set WRAPPER_URL=%%A
    echo Downloading Maven Wrapper from %WRAPPER_URL%
    powershell -Command "Invoke-WebRequest -Uri '%WRAPPER_URL%' -OutFile '%MAVEN_WRAPPER_JAR%'"
)

"%JAVA_CMD%" -classpath "%MAVEN_WRAPPER_JAR%" org.apache.maven.wrapper.MavenWrapperMain %*
