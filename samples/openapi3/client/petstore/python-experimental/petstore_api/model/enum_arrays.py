# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""

import re  # noqa: F401
import sys  # noqa: F401
import typing  # noqa: F401

from frozendict import frozendict  # noqa: F401

from decimal import Decimal  # noqa: F401
from datetime import date, datetime  # noqa: F401
from frozendict import frozendict  # noqa: F401

from petstore_api.schemas import (  # noqa: F401
    AnyTypeSchema,
    ComposedSchema,
    DictSchema,
    ListSchema,
    StrSchema,
    IntSchema,
    Int32Schema,
    Int64Schema,
    Float32Schema,
    Float64Schema,
    NumberSchema,
    DateSchema,
    DateTimeSchema,
    BoolSchema,
    BinarySchema,
    NoneSchema,
    none_type,
    InstantiationMetadata,
    Unset,
    unset,
    ComposedBase,
    ListBase,
    DictBase,
    NoneBase,
    StrBase,
    IntBase,
    NumberBase,
    DateBase,
    DateTimeBase,
    BoolBase,
    BinaryBase,
    Schema,
    _SchemaValidator,
    _SchemaTypeChecker,
    _SchemaEnumMaker
)


class EnumArrays(
    DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
    just_symbol (str,): 
    array_enum (tuple,): 
    _additional_properties (Schema): the definition used for additional properties
        that are not defined in _properties
    """
    
    
    class just_symbol(
        _SchemaEnumMaker(
            enum_value_to_name={
                ">=": "GREATER_THAN_EQUALS",
                "$": "DOLLAR",
            }
        ),
        StrSchema
    ):
        
        @classmethod
        @property
        def GREATER_THAN_EQUALS(cls):
            return cls._enum_by_value[">="](">=")
        
        @classmethod
        @property
        def DOLLAR(cls):
            return cls._enum_by_value["$"]("$")
    
    
    class array_enum(
        ListSchema
    ):
        
        
        class _items(
            _SchemaEnumMaker(
                enum_value_to_name={
                    "fish": "FISH",
                    "crab": "CRAB",
                }
            ),
            StrSchema
        ):
            
            @classmethod
            @property
            def FISH(cls):
                return cls._enum_by_value["fish"]("fish")
            
            @classmethod
            @property
            def CRAB(cls):
                return cls._enum_by_value["crab"]("crab")


    def __new__(
        cls,
        *args: typing.Union[dict, frozendict, ],
        just_symbol: typing.Union[just_symbol, Unset] = unset,
        array_enum: typing.Union[array_enum, Unset] = unset,
        _instantiation_metadata: typing.Optional[InstantiationMetadata] = None,
        **kwargs: typing.Type[Schema],
    ):
        return super().__new__(
            cls,
            *args,
            just_symbol=just_symbol,
            array_enum=array_enum,
            _instantiation_metadata=_instantiation_metadata,
            **kwargs,
        )
